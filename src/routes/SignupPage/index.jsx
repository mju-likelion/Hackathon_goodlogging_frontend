import Button from '../../components/Button'

import styles from './signupPage.module.scss'

const LOCAL_NAMES = [
  '서울',
  '부산',
  '인천',
  '대구',
  '광주',
  '대전',
  '울산',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '세종',
]

const SignupPage = () => {
  return (
    <div className={styles.signupPage}>
      <h1>회원 가입</h1>
      <form className={styles.signupForm}>
        <input type="email" placeholder="example@domain.com" />
        <input placeholder="username" />
        <input placeholder="password" />
        <p className={styles.label}>지역</p>
        <div className={styles.selector}>
          {LOCAL_NAMES.map((item) => (
            <Button
              key={item}
              text={item}
              width="small"
              textColor="textBlack"
              backColor="backGrey"
            />
          ))}
        </div>
        <Button
          text="회원가입 완료"
          width="large"
          height="tall"
          textColor="textWhite"
          backColor="backBlue"
          textSize="textLarge"
        />
      </form>
    </div>
  )
}

export default SignupPage