/** @format */
'use client';

import styles from './page.module.scss';
import { playerInputType, usePlayerForm } from './form/form.player';
import { useState, useRef, useEffect, MouseEventHandler } from 'react';

export default function Home() {
  const {
    f: {
      handleSubmit,
      resetField,
      formState: { errors, isValid },
    },
    r,
  } = usePlayerForm();
  const [players, setPlayers] = useState<playerInputType[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const handleClick = () => {
    console.log(formRef.current?.teamType.value);
  };

  return (
    <main className={styles.main}>
      <section>
        <h2>정보입력</h2>
        <form action="" ref={formRef}>
          <div className={styles.selectTeamType}>
            <input type="radio" id="balance" name="teamType" value="balance" />
            <label htmlFor="balance">밸런스</label>
            <input type="radio" id="similar" name="teamType" value="similar" />
            <label htmlFor="similar">비슷한 유저끼리</label>
          </div>
          <div className={styles.inputTexts}>
            <div>
              <input
                type="text"
                {...r.name}
                placeholder="이름을 입력해주세요"
              />
              {errors.name ? <p>{errors.name.message}</p> : <></>}
            </div>
            <div>
              <input
                type="text"
                {...r.playTime}
                placeholder="플레이 시간을 입력해주세요"
              />
              {errors.playTime ? <p>{errors.playTime.message}</p> : <></>}
            </div>
          </div>
          <div className={styles.postionChecks}>
            <div>
              <input
                type="checkbox"
                {...r.position}
                id="tanker"
                name="position"
              />
              <label htmlFor="tanker">탱커</label>
            </div>
            <div>
              <input
                type="checkbox"
                {...r.position}
                id="dealer"
                name="position"
              />
              <label htmlFor="dealer">딜러</label>
            </div>
            <div>
              <input
                type="checkbox"
                {...r.position}
                id="healer"
                name="position"
              />
              <label htmlFor="healer">힐러</label>
            </div>
          </div>
        </form>
        <button onClick={handleClick}>클릭</button>
      </section>
      <section>
        {players.map((player, idx) => (
          <div>
            <span>{player.name}</span>
            <span>{player.position}</span>
            <span>{player.playTime}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
