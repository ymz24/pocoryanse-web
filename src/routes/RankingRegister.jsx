import React from 'react';
import { useState } from 'react';
// import { writeFile } from 'fs';
import TopHeader from './TopHeader';
import Footer from './Footer';
import { CONFIG } from '../const';

// 初期状態を定義
const initialState = {
    name: '',
    spa: 0,
    sauna: 0,
    bedrock: 0,
    rest: 0,
    cost: 0,
    bonus: 0,
    total: 0,
};

const RankingRegister = () => {
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    // フォーム定義を配列化して繰り返しで描画
    const fields = [
        { name: 'name', label: '施設名称', type: 'text', placeholder: '能美の湯', cols: 'sm:col-span-2' },
        { name: 'spa', label: '温泉', type: 'number', min: 0, max: 20 },
        { name: 'sauna', label: 'サウナ', type: 'number', min: 0, max: 15 },
        { name: 'bedrock', label: '岩盤浴', type: 'number', min: 0, max: 15 },
        { name: 'rest', label: '休憩所・館内', type: 'number', min: 0, max: 15 },
        { name: 'cost', label: 'コスト', type: 'number', min: 0, max: 15 },
        { name: 'bonus', label: '能美ボーナス', type: 'number', min: 0, max: 20 },
        { name: 'total', label: '総合点数', type: 'number', disabled: true },
    ];

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newVal = type === 'number' ? Number(value) : value;

        setFormData(prevData => {
            // 対象の入力値を更新
            const updatedData = { ...prevData, [name]: newVal };
            // 合計を算出する数値フィールド
            const numericKeys = ['spa', 'sauna', 'bedrock', 'rest', 'cost', 'bonus'];
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
            // fields に定義したキーだけを送る（不要キーを排除）
            const payload = fields.reduce((acc, f) => {
                // f.name が存在する formData の値のみ追加（undefined を送らない）
                const val = formData[f.name];
                if (typeof val !== 'undefined') acc[f.name] = String(val);
                return acc;
            }, {});

            const params = new URLSearchParams(payload).toString();
            const response = await fetch(CONFIG.API_URL, {
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
            <div className="pt-10">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">登録</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            {fields.map(field => (
                                <div key={field.name} className={field.cols ? field.cols : 'w-full'}>
                                    <label htmlFor={field.name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        {field.label}{field.max ? ` ${field.max}pt` : ''}
                                    </label>
                                    <input
                                        type={field.type || 'text'}
                                        name={field.name}
                                        id={field.name}
                                        min={field.min}
                                        max={field.max}
                                        placeholder={field.placeholder ?? (field.max ? `/${field.max}` : '')}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        disabled={field.disabled}
                                        required={field.name !== 'total'}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
                                    />
                                </div>
                            ))}
                        </div>
                        <button type="submit" className="btn btn-primary w-full inline-flex items-center mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            登録
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RankingRegister;