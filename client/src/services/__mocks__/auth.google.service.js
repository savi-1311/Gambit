export default {
 
    async signIn(token){
        const res = {'token':'jhgfeufhjeofnefo'}
        // console.warn("Using mock notification service");
        if(token){
            localStorage.setItem('user', JSON.stringify(res));
            return res;
        }
        else{
            return null;
        }

    }
};