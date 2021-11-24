import configAPI from '../../configs/api.config';
export default {
   

  async login(username, password) {
    const res = {'token':'jhgfeufhjeofnefo'}
    if(username && password){
      localStorage.setItem('user', JSON.stringify(res));
        return res;
    }
    else {
      return null
    }
  },

  async logout() {
    localStorage.removeItem('user');
  },

  async register(fullname, email, username, password) {
    const res = {'token':'jhgfeufhjeofnefo'}
      if (fullname && email && username && password){
        localStorage.setItem('user', JSONstringify(res));
      return res;
      }
      else{
        return null
      }
  },

  async confirm(userId){
    const res = {'token':'jhgfeufhjeofnefo'}
    if(userId){
      return res;
    }
    else{
      return null;
    }
  },

  async changePassword(oldPassword, newPassword, userId){
    const res = {'token':'jhgfeufhjeofnefo'}
    if(oldPassword && newPassword && userId){
      return res;
    }
    else{
      return null;
    }
  },
    
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}



