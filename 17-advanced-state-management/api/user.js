import pb from './pb';

export async function userSignUp(username, email, password) {
  try {
    const newUser = {
      email,
      username: email.split('@').at(0),
      emailVisibility: true,
      password,
      passwordConfirm: password,
    };

    const record = await pb.collection('users').create(newUser);

    console.log(record);
  } catch (error) {
    console.error(error);
  }

  // create 성공 시
  // 인증된 사용자 정보를 컨텍스트에 저장 혹은
  // 값을 반환
}
export async function userSignIn() {}
export async function userSignOut() {}
