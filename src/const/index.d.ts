import dayjs from 'dayjs';

interface UserStatus {
  id: string;
  name: string;
  /**
   * 起床時刻
   */
  wakeUpTime: dayjs.Dayjs;
  /**
   * 空腹レベル
   *
   * 0~100の数値で表現（100に近いと空腹）
   */
  hungerLevel: number;
  /**
   * 満腹レベル
   *
   * 0~100の数値で表現（100に近いと満腹）
   */
  fullnessLevel: number;
  /**
   * カフェインレベル
   *
   * 0 ~ `無限` の数値で表現
   *
   * - コーヒー一杯で約100mgのカフェインが含まれる
   * - 1日に摂取できるカフェインの上限は400mg（一度に摂取できる量は150mg）
   * - それ以上の摂取は健康に悪影響を及ぼす
   * - 一度に80杯のコーヒーを飲むと死にます
   */
  caffeineLevel: number;
  /**
   * 自律神経レベル
   *
   * 0~100の数値で表現（0に近いと落ち着き、100に近いと興奮）
   */
  autonomicNervousLevel: number;
  /**
   * 眠気レベル
   *
   * 0~100の数値で表現（100に近いと眠い）
   */
  sleepinessLevel: number;
  /**
   * ストレスレベル
   *
   * 0~100の数値で表現（100に近いとストレス）
   */
  stressLevel: number;
  /**
   * メタボレベル
   *
   * 0~100の数値で表現（100に近いとメタボ）
   *
   * - この値が高いほど太りやすくなる
   * @default 0
   *
   * @example
   * - 0: 体重が増えにくい
   * - 50: 体重が増えやすい
   * - 100: 健康リスクが高い
   *
   * 一度に大量の食事、かつ、運動不足の場合、この値が上昇する
   */
  exerciseLevel: number;
  /**
   * 筋肉痛レベル
   *
   * 0~100の数値で表現（100に近いと筋肉痛）
   *
   * - 痛みを感じるのは20~30
   * - 50~60は、日常生活に支障をきたす
   * - 80~90は、痛みで動けない
   * - 100は、筋肉が壊死している
   *
   * @default 0
   */
  musclePainLevel: number;
  /**
   * 勉強レベル
   *
   * 0~100の数値で表現（100に近いと勉強）
   */
  studyLevel: number;
  /**
   * 免疫レベル
   *
   * 0~100の数値で表現（100に近いと免疫力が高い）
   *
   * この値が高いほど病気にかかりにくくなる
   * この値が低いほど病気にかかりやすくなる
   */
  immunityLevel: number;
  /**
   * 自己肯定感（自己評価）
   *
   * 0~100の数値で表現（100に近いと自己肯定感が高い）
   *
   * @default 50
   */
  selfEsteemLevel: number;
  /**
   * 食事ログ
   *
   * 食事ログは日付と食べたものを記録する
   */
  mealLog: {
    date: string;
    meal: string[];
  }[];
  /**
   * 運動ログ
   *
   * 運動ログは日付と運動内容を記録する
   */
  exerciseLog: {
    date: string;
    exercise: string;
  }[];
  /**
   * 所持金
   */
  money: number;
  /**
   * アイテム
   */
  items: string[];
}
