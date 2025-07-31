import React from 'react';
import { useState } from 'react';
// import { writeFile } from 'fs';
import TopHeader from './TopHeader';
import Footer from './Footer';
import { API_URL } from '../const';

// 初期状態を定義
const initialState = {
    name: '',
    spa: 0,
    sauna: 0,
    bedrock: 0,
    rest: 0,
    cost: 0,
    dining: 0,
    bonus: 0,
    total: 0,
};

const RankingRegister = () => {
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newVal = type === 'number' ? Number(value) : value;

        setFormData(prevData => {
            // 対象の入力値を更新
            const updatedData = { ...prevData, [name]: newVal };
            // 合計を算出する数値フィールド
            const numericKeys = ['spa', 'sauna', 'bedrock', 'rest', 'cost', 'dining', 'bonus'];
            // 各キーの値を合算（未入力の場合は 0 とする）
            const total = numericKeys.reduce((sum, key) => sum + (Number(updatedData[key]) || 0), 0);
            updatedData.total = total;
            return updatedData;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log('Submitting form data:', formData);
        try {
            const params = new URLSearchParams(formData);
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: params,
            });
            const result = await response.json();
            alert(result.result === 'success' ? '登録しました' : '登録に失敗しました');
            // 登録成功の場合、フォームをリセットする
            if (result.result === 'success') {
                setFormData(initialState);
            }
        } catch (err) {
            alert('通信エラー');

        }
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
                <div className="loading loading-ring loading-xl"></div>
            </div>
        );
    }

    return (
        <div>
            <TopHeader />
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">登録</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">施設名称</label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="能美の湯"
                                value={formData.name}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="spa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">温泉・館内 20pt</label>
                            <input
                                type="number"
                                name="spa"
                                id="spa"
                                min={0}
                                max={20}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="/20"
                                value={formData.spa}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="sauna" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">サウナ 15pt</label>
                            <input
                                type="number"
                                name="sauna"
                                id="sauna"
                                min={0}
                                max={15}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="/15"
                                value={formData.sauna}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="bedrock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">岩盤浴 15pt</label>
                            <input
                                type="number"
                                name="bedrock"
                                id="bedrock"
                                min={0}
                                max={15}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="/15"
                                value={formData.bedrock}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="rest" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">休憩所 15pt</label>
                            <input
                                type="number"
                                name="rest"
                                id="rest"
                                min={0}
                                max={15}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="/15"
                                value={formData.rest}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="cost" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">コスト 10pt</label>
                            <input
                                type="number"
                                name="cost"
                                id="cost"
                                min={0}
                                max={10}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="/10"
                                value={formData.cost}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="dining" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">お食事処 10pt</label>
                            <input
                                type="number"
                                name="dining"
                                id="dining"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="/10"
                                value={formData.dining}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="bonus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">能美ボーナス 15pt</label>
                            <input
                                type="number"
                                name="bonus"
                                id="bonus"
                                min={0}
                                max={15}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="/15"
                                value={formData.bonus} 
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="total" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                総合点数
                            </label>
                            <input
                                type="number"
                                name="total"
                                id="total"
                                value={formData.total} 
                                disabled
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="/100"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-full inline-flex items-center mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        登録
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default RankingRegister;