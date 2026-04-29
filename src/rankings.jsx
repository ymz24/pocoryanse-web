// 各ランキングの設定を集約
// 色や文言、評価項目はここで管理し、UI は RankingCard / RankingListPage / RankingFormPage が共通で利用する

export const HOTSPRINGS_CONFIG = {
    type: 'hotsprings',
    listPath: '/HotSprings',
    registerPath: '/RankingRegister',
    // 一覧ページ見出し
    page: {
        eyebrow: 'Ranking',
        title: 'HotSprings',
        description: '訪れた温泉・サウナを評価したランキング。',
    },
    // 一覧ページ右下 FAB
    fab: {
        ariaLabel: '施設を登録',
        label: '登録',
    },
    // 登録ページ ヘッダー
    register: {
        eyebrow: 'New Entry',
        title: '施設を登録',
        description: '各項目を評価し、合計点数を算出します。',
        submitLabel: '登録する',
        nameField: { label: '施設名称', placeholder: '能美の湯' },
    },
    // アクセントカラー
    accent: {
        primary: '#0a84ff',
        gradient: 'linear-gradient(90deg, #0a84ff 0%, #5e5ce6 100%)',
        // 送信ボタン hover シャドウ用
        shadowRgba: 'rgba(10,132,255,0.30)',
    },
    // 評価項目
    items: [
        { key: 'spa', label: '温泉', max: 20 },
        { key: 'sauna', label: 'サウナ', max: 15 },
        { key: 'bedrock', label: '岩盤浴', max: 15 },
        { key: 'rest', label: '休憩所・館内', max: 15 },
        { key: 'cost', label: 'コスト', max: 15 },
        { key: 'bonus', label: '能美ボーナス', max: 20 },
    ],
};

export const RAMEN_CONFIG = {
    type: 'ramen',
    listPath: '/Ramen',
    registerPath: '/RamenRegister',
    page: {
        eyebrow: 'Ranking',
        title: 'Ramen',
        description: '訪れたラーメン店を評価したランキング。',
    },
    fab: {
        ariaLabel: 'ラーメン店を登録',
        label: '登録',
    },
    register: {
        eyebrow: 'New Entry',
        title: 'ラーメンを登録',
        description: '各項目を評価し、合計点数を算出します。',
        submitLabel: '登録する',
        nameField: { label: '店名', placeholder: '柳井ラーメン' },
    },
    accent: {
        primary: '#ff375f',
        gradient: 'linear-gradient(90deg, #ff9500 0%, #ff375f 100%)',
        shadowRgba: 'rgba(255,55,95,0.30)',
    },
    items: [
        { key: 'soup', label: 'スープ', max: 20 },
        { key: 'noodle', label: '麺', max: 15 },
        { key: 'topping', label: 'トッピング', max: 15 },
        { key: 'shop', label: '店内', max: 15 },
        { key: 'cost', label: 'コスト', max: 15 },
        { key: 'bonus', label: '柳井ボーナス', max: 20 },
    ],
};
