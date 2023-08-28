/** @format */
'use client';

import styles from './page.module.scss';
import { playerInputType, usePlayerForm } from './form/form.player';
import {
  useState,
  useRef,
  useEffect,
  MouseEventHandler,
  ChangeEvent,
  ChangeEventHandler,
} from 'react';

export default function Home() {
  const {
    f: {
      handleSubmit,
      resetField,
      getValues,
      formState: { errors, isValid },
    },
    r,
  } = usePlayerForm();

  const [players, setPlayers] = useState<playerInputType[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const handleClick = () => {
    console.log('팀타입 : ', formRef.current?.teamType.value);
    console.log(
      getValues('name'),
      getValues('playTime'),
      getValues('position')
    );

    setPlayers((prev) => [
      ...prev,
      {
        id: prev.length,
        name: getValues('name'),
        playTime: getValues('playTime'),
        position: getValues('position'),
      },
    ]);
  };

  const deletePlayer = (id: number) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  return (
    <main className={styles.main}>
      <section className={styles.addPlayerSection}>
        <form action="" ref={formRef}>
          <div className={styles.selectTeamType}>
            <div>
              <input
                type="radio"
                id="balance"
                name="teamType"
                value="balance"
              />
              <label htmlFor="balance">밸런스</label>
            </div>
            <div>
              <input
                type="radio"
                id="similar"
                name="teamType"
                value="similar"
              />
              <label htmlFor="similar">비슷한 유저끼리</label>
            </div>
          </div>
          <div className={styles.inputTexts}>
            <div className={styles.inputName}>
              <label htmlFor="name" className={styles.label}>
                이름
              </label>
              <input
                id="name"
                type="text"
                {...r.name}
                placeholder="이름을 입력해주세요"
                className={styles.inputText}
              />
              {errors.name ? <p>{errors.name.message}</p> : <></>}
            </div>
            <div className={styles.postionChecks}>
              <p className={styles.label}>포지션</p>
              <div className={styles.positionInputs}>
                <div className={styles.positionInput}>
                  <input
                    type="checkbox"
                    {...r.position}
                    id="tanker"
                    value="탱커"
                    name="position"
                  />
                  <label htmlFor="tanker">탱커</label>
                </div>
                <div className={styles.positionInput}>
                  <input
                    type="checkbox"
                    {...r.position}
                    id="dealer"
                    value="딜러"
                    name="position"
                  />
                  <label htmlFor="dealer">딜러</label>
                </div>
                <div className={styles.positionInput}>
                  <input
                    type="checkbox"
                    {...r.position}
                    id="healer"
                    value="힐러"
                    name="position"
                  />
                  <label htmlFor="healer">힐러</label>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="playtime" className={styles.label}>
                플레이타임
              </label>
              <input
                id="playtime"
                type="text"
                {...r.playTime}
                className={styles.inputText}
                placeholder="플레이 시간을 입력해주세요"
              />
              {errors.playTime ? <p>{errors.playTime.message}</p> : <></>}
            </div>
          </div>
        </form>
        <button onClick={handleClick} className={styles.addBtn}>
          추가
        </button>
      </section>
      <section className={styles.addedPlayerSection}>
        {players.map((player, idx) => (
          <div className={styles.addedPlayer}>
            <button onClick={() => deletePlayer(player.id)}>X</button>
            <span>
              <strong>이름 : </strong>
              {player.name}
            </span>
            <span>
              {' '}
              <strong>포지션 : </strong>
              {player.position.join(', ')}
            </span>
            <span>
              {' '}
              <strong>플레이타임 : </strong>
              {player.playTime}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
