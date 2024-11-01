import dayjs from 'dayjs';

interface UserStatus {
  id: string;
  name: string;
  /**
   * 起床時刻
   */
  wakeUpTime: dayjs.Dayjs;
  /**
   * 空腹・満腹レベル
   *
   * 0~100の数値で表現
   *
   * - 0: 空腹
   * - 50: 普通（空腹と満腹の境界）
   * - 100: 満腹
   *   - 90: 腹八分目
   * - 糖質中心の食事では、すぐに空腹になったり、眠気を感じる
   * - 健康に悪い食事をすると、免疫力が下がる
   * - 食事を抜くと、体力が低下する
   * - 腹八分目以降で、直後に運動をすると、お腹を痛くする
   */
  hungerFullnessLevel: string;
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
  caffeineLevel: string;
  /**
   * 自律神経レベル
   *
   * 0~100の数値で表現（0に近いと落ち着き、100に近いと興奮）
   *
   * - この値が高いほど、興奮状態になる
   * - この値が低いほど、リラックス状態になる
   * - 一日の中で、交感神経と副交感神経のバランスが大切
   * - 自律神経が乱れると、疲れやすかったり、ストレスを感じやすくなる
   */
  autonomicNervousLevel: string;
  /**
   * 眠気レベル
   *
   * 0~100の数値で表現（100に近いと眠い）
   *
   * - この値が高い状態で睡眠をすると、深い睡眠に入りやすい
   * - カフェインが残った状態では、脳が覚醒しており、眠気を感じにくい
   * - 眠気が高いと、集中力が低下する
   * - 交感神経が優位だと、眠気を感じにくい
   * - 副交感神経が優位だと、眠気を感じやすい
   */
  sleepinessLevel: string;
  /**
   * ストレスレベル
   *
   * 0~100の数値で表現（100に近いとストレス）
   *
   * - この値が高いほど、心身に悪影響を及ぼす
   * - この値が低いほど、心身がリラックスする
   * - ストレスが高いと、免疫力が低下する
   * - ストレスが高いと、睡眠が浅くなる
   * - ストレスが高いと、食欲が増す
   * - ストレスが高いと、自己肯定感が低下する
   */
  stressLevel: string;
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
  exerciseLevel: string;
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
  musclePainLevel: string;
  /**
   * 勉強レベル
   *
   * 0~100の数値で表現
   *
   * - 0: 知識がない
   * - 50: それなりに知識がある
   * - 100: すべての知識を持っている
   *
   * テスト終了後は0に戻る（あくまでテストのための指標）
   */
  studyLevel: string;
  /**
   * 免疫レベル
   *
   * 0~100の数値で表現（100に近いと免疫力が高い）
   *
   * この値が高いほど病気にかかりにくくなる
   * この値が低いほど病気にかかりやすくなる
   */
  immunityLevel: string;
  /**
   * 自己肯定感（自己評価）
   *
   * 0~100の数値で表現（100に近いと自己肯定感が高い）
   *
   * @default 50
   */
  selfEsteemLevel: string;
  /**
   * 集中力
   *
   * 0~100の数値で表現（100に近いと集中力が高い）
   *
   * - 集中力が高いと、作業効率が上がる
   * - 集中力が低いと、作業効率が下がる
   * - 集中力が高いと、疲れにくい
   * - 集中力が低いと、疲れやすい
   */
  concentrationLevel: string;
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
  money: string;
  /**
   * アイテム
   */
  items: string[];
  /**
   * ポイント
   */
  point: string;
  /**
   * 現在の画像
   */
  selectImage: string;
}
