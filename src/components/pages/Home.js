import Post from './Post';
import posts from './posts';

const Home = () => {
    return (
        <div>
             {
            posts.map( (element) => {
                console.log();
                return <Post name={element.title} id={element.id} body={element.body} tags={element.tags} />
            })
        }                                       
      
        </div>
    );
};

export default Home;