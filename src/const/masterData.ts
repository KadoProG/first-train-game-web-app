import { UserStatus } from '@/const';
import dayjs from 'dayjs';

export const actionOptions: {
  name: string;
  action: () => void;
  description: string;
}[] = [
  { name: '飯', action: () => {}, description: '食事をする' },
  { name: '運動', action: () => {}, description: '体を動かす' },
  { name: '風呂', action: () => {}, description: '湯船につかる' },
  { name: 'シャワーのみ', action: () => {}, description: '体を洗う' },
  { name: '趣味の時間', action: () => {}, description: '好きなことをする' },
  { name: '勉強', action: () => {}, description: '知識を得る' },
  { name: '寝る', action: () => {}, description: '睡眠をとる' },
];

export const defaultUserStatus: UserStatus = {
  id: '1',
  name: 'なつみ',
  wakeUpTime: dayjs(),
  hungerFullnessLevel: '50',
  caffeineLevel: '30',
  autonomicNervousLevel: '80',
  sleepinessLevel: '10',
  stressLevel: '20',
  exerciseLevel: '10',
  musclePainLevel: '0',
  studyLevel: '20',
  immunityLevel: '80',
  selfEsteemLevel: '50',
  concentrationLevel: '50',
  mealLog: [
    {
      date: '2021-01-01',
      meal: ['TKG', '味噌汁', 'コーヒー'],
    },
  ],
  exerciseLog: [],
  money: '100000',
  items: ['iPad'],
  point: '0',
  selectImage: 'select_normal',
};
