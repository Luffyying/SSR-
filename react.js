import React,{ PureComponent }  from 'react';
// import b from './a.js'
// console.log(b);
const varia = 90;
const Home = () => {
    return (
        <div id="root">
            <h4>{varia}</h4>
            <div onClick={()=>{console.log('hahahah')}}>888</div>
        </div>
    )
}
export default Home