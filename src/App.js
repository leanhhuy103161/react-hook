import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string'
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';
import MagicBox from './components/MagicBox'


function App() {

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination ] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        // console.log({responseJSON});  
        const {data, pagination} = responseJSON;
        setPagination(pagination)
        setPostList(data)
      } catch (error) {
        console.log('failed to fetch post list: ', error.message);
      }
    }
    fetchPostList();
  }, [filters])


  useEffect(() => {
    // console.log('todo list Effect');
  })

  // console.log('postList in app: ', postList);

  function handlePageChange(newPage) {
    console.log('new page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  function handleFiltersChange(newFilters) {
    console.log('new filter: ', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm
    })
  }

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showClock && <Clock/>}
        <button onClick={() => setShowClock(false)}>Hide Clock</button>
        <MagicBox />
      </header>
      <h2>Reacthook - Call Api Example</h2>
      <PostFiltersForm onSubmit={handleFiltersChange}/>
      <PostList posts={postList}/>
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChange}/>
    </div>
  );
}

export default App;
