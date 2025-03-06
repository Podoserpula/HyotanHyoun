"use client"
import Header from '@/components/Header'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


export default function page() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const router = useRouter();

	const handleRegister = () => {
		if (password !== confirmPassword) {
			setErrorMessage("パスワードが一致しません。")
			return;
		}
		const registerSuccess = true;
		if (registerSuccess) {
			router.push("/login");
		} else {
			setErrorMessage("登録に失敗しました。もう一度お試しください。");
		}
	};


	return (
		<>
			<Header title="新規会員登録" />
			<main>
				<div className="flex justify-center min-h-screen bg-gray-100">
					<div className="mt-10">


						{/* エラーメッセージ */}
						{errorMessage && (
							<div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
								{errorMessage}
							</div>
						)}

						{/* 登録フォーム */}
						<form
							onSubmit={(e) => {
								e.preventDefault();
								handleRegister();
							}}
						>

							{/* メールアドレス */}
							<div className="mb-4">
								<label htmlFor="email" className="block text-gray-700">
									メールアドレス
								</label>
								<input
									type="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full px-4 py-2 border rounded-md"
									required
								/>
							</div>

							{/* パスワード */}
							<div className="mb-4">
								<label htmlFor="password" className="block text-gray-700">
									パスワード
								</label>
								<input
									type="password"
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="w-full px-4 py-2 border rounded-md"
									required
								/>
							</div>

							{/* パスワード確認 */}
							<div className="mb-4">
								<label htmlFor="confirmPassword" className="block text-gray-700">
									パスワード確認
								</label>
								<input
									type="password"
									id="confirmPassword"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									className="w-full px-4 py-2 border rounded-md"
									required
								/>
							</div>

							{/* 登録ボタン */}
							<button
								type="submit"
								className="w-full py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-blue-700"
							>
								登録
							</button>
						</form>

						<p className="text-center mt-4">
							すでにアカウントをお持ちですか?{" "}
							<a href="/login" className="text-blue-600 hover:underline">
								ログイン
							</a>
						</p>
					</div>
				</div>
			</main>
		</>
	)
}
