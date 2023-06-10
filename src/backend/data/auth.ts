interface UserAuthInterface {
  data: {
    username: string;
    password: string;
  };
}

interface UserDetailsInterface {
  user: {
    id: string;
    name: string;
  };
}
interface JwtTokenInterface {
  token: {
    secret_key: string;
  };
}

export const userAuth: UserAuthInterface = {
  data: {
    username: 'a',
    password: 'p',
  },
};

export const userDetails: UserDetailsInterface = {
  user: {
    id: '01',
    name: 'Ameera',
  },
};

export const jwtToken: JwtTokenInterface = {
  token: {
    secret_key: 'todolistjwtsecretkey',
  },
};
