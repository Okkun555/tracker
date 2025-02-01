import { loginSchema } from "@/features/auth/schemas/auth/login-schema"

describe("login schema", () => {
    const validParams = {
        email: "sample@example.com",
        password: "password"
    }

    describe("valid test", () => {
        it("成功する", () => {
            const result = loginSchema.safeParse(validParams)
            expect(result.success).toBe(true)
        })
    })

    describe("Email Validation", () => {
        describe("メールアドレス以外の場合", () => {
            it("バリデーションメッセージを返す", () => {
                const result = loginSchema.safeParse({ ...validParams, email: "invalidEmail" })
                expect(result.success).toBe(false)
                if (!result.success) {
                    expect(result.error.errors[0].message).toBe("メールアドレスの形式が正しくありません")
                }
            })
        })

        describe("メールアドレスが空の場合", () => {
            it("バリデーションメッセージを返す", () => {
                const result = loginSchema.safeParse({ ...validParams, email: "" })
                expect(result.success).toBe(false)
                if (!result.success) {
                    expect(result.error.errors[0].message).toBe("メールアドレスの形式が正しくありません")
                }
            })
        })
    })

    describe("Password Validation", () => {
        describe("パスワードがからの場合", () => {
            it("バリデーションメッセージを返す", () => {
                const result = loginSchema.safeParse({ ...validParams, password: "" })
                expect(result.success).toBe(false)
                if (!result.success) {
                    expect(result.error.errors[0].message).toBe("パスワードは8文字以上で入力してください")
                }
            })
        })

        describe("パスワードが7文字以下の場合", () => {
            it("バリデーションメッセージを返す", () => {
                const result = loginSchema.safeParse({ ...validParams, password: "1234567" })
                expect(result.success).toBe(false)
                if (!result.success) {
                    expect(result.error.errors[0].message).toBe("パスワードは8文字以上で入力してください")
                }
            })
        })
    })
})