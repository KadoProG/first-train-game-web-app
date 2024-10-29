import { Button } from '@/components/common/button/Button';
import { actionOptions } from '@/const/masterData';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const PreviewPage: React.FC = () => {
  // useLocationフックを使用して現在のURL情報を取得
  const location = useLocation();
  const navigate = useNavigate();

  // URLSearchParamsを使用してクエリパラメータを解析
  const queryParams = new URLSearchParams(location.search);

  // 特定のクエリパラメータ（例: "id"）を取得
  const actionId = queryParams.get('action');

  const action = actionOptions.find((actionOption) => actionOption.name === actionId);

  const [buttonClicked, setButtonClicked] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!buttonClicked) {
      const timer = setTimeout(() => {
        navigate('/1', { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [navigate, buttonClicked]);

  if (!action) {
    return <div>アクションが見つかりません</div>;
  }
  return (
    <div>
      <h1>Preview Page</h1>
      <p>アクション: {action.description}</p>
      <img src="/images/happy-cat-happy-happy-cat.gif" alt="happy cat" />
      <p>３秒後にリダイレクトされます</p>
      <Button href="/1" onClick={() => setButtonClicked(true)}>
        さっさと戻る
      </Button>
    </div>
  );
};
