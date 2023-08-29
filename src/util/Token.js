import Cookies from "js-cookie";

const CurrentUserInfo = () => {
    try {
      const tokenParts = Cookies.get('token').split('.');

      const payload = JSON.parse(atob(tokenParts[1]));
      
      return payload;
    } catch (error) {
      console.error('Error decoding token:', error);
    }
};

export default CurrentUserInfo;