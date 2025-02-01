/**
 * ラベル
 */
export const label = {
    email: "メールアドレス",
    password: "パスワード",
}

/**
 * バリデーションメッセージの定義
 */
export const requiredError = (label: string) => `${label}は必須入力です`;

export const failedConfirmError = (label: string) => `${label}が一致しません`;

export const typeError = (label: string) => `${label}の形式が正しくありません`;

export const minLengthError = (label: string, length: number) => `${label}は${length}文字以上で入力してください`;