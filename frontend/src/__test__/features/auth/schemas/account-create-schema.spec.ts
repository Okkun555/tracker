import {accountCreateSchema} from "@/features/auth/schemas/auth/account-create-schema";

describe("account create schema", () => {
    const validParams = {
        email: "sample@example.com",
        password: "password",
        passwordConfirmation: "password",
    }

    describe("valid test", () => {
        it("成功する", () => {
            const result = accountCreateSchema.safeParse(validParams)
            expect(result.success).toBeTruthy()
        })
    })

    describe("Email Validation", () => {
        describe("メールアドレス以外の場合", () => {
            it("バリデーションメッセージを返す", () => {
                const result = accountCreateSchema.safeParse({ ...validParams, email: "invalidEmail" })
                expect(result.success).toBeFalsy()
                if (!result.success) {
                    expect(result.error.errors[0].message).toBe("メールアドレスの形式が正しくありません")
                }
            })
        })

        describe("メールアドレスが空の場合", () => {
            it("バリデーションメッセージを返す", () => {
                const result = accountCreateSchema.safeParse({ ...validParams, email: "" })
                expect(result.success).toBeFalsy()
                if (!result.success) {
                    expect(result.error.errors[0].message).toBe("メールアドレスの形式が正しくありません")
                }
            })
        })
    })

    describe("Password Validation", () => {
        describe("パスワードが空の場合", () => {
            it("バリデーションメッセージを返す", () => {
                const result = accountCreateSchema.safeParse({ ...validParams, password: "" })
                expect(result.success).toBeFalsy()
                if (!result.success) {
                    expect(result.error.errors[0].message).toBe("パスワードは8文字以上で入力してください")
                }
            })
        })

        describe("パスワードが7文字以下の場合", () => {
            it("バリデーションメッセージを返す", () => {
                const result = accountCreateSchema.safeParse({ ...validParams, password: "1234567" })
                expect(result.success).toBeFalsy()
                if (!result.success) {
                    expect(result.error.errors[0].message).toBe("パスワードは8文字以上で入力してください")
                }
            })
        })
    })

    describe("Password Confirmation Validation", () => {
        describe("パスワードとパスワード確認が一致しない場合", () => {
            it("バリデーションメッセージを返す", () => {
                const result = accountCreateSchema.safeParse({ ...validParams, passwordConfirmation: "invalidPassword" })
                expect(result.success).toBeFalsy()
                if (!result.success) {
                    expect(result.error.errors[0].message).toBe("パスワードが一致しません")
                }
            })
        })
    })
})