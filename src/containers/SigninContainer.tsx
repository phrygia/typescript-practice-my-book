import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Signin from '../components/Signin';
import { login as loginSagaStart } from '../redux/modules/auth';

function SigninContainer() {
  const dispath = useDispatch();

  const login = useCallback(
    reqData => {
      dispath(loginSagaStart(reqData));
    },
    [dispath],
  );

  return <Signin login={login} />;
}

export default SigninContainer;
