import { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Primer Publicación', content: 'Este es el contenido de la primera publicación.', comments: [], date: new Date('2023-01-01') },
    { id: 2, title: 'Segunda Publicación', content: 'Aquí hay algo interesante sobre la segunda publicación.', comments: [], date: new Date('2023-02-01') },
    { id: 3, title: 'Tercera Publicación', content: '¿Sabías que esta es la tercera publicación?', comments: [], date: new Date('2023-03-01') },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const handleAddPost = (e) => {
    e.preventDefault();
    if (newPost.title.trim() && newPost.content.trim()) {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: prevPosts.length + 1, title: newPost.title, content: newPost.content, comments: [], date: new Date() },
      ]);
      setNewPost({ title: '', content: '' });
    }
  };

  const handleAddComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  const filteredPosts = posts
    .filter((post) => post.title.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'date') {
        return b.date - a.date;
      }
      return 0;
    });

  return (
    <div id="root">
      <h1>Blog de Publicaciones</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Filtrar por título..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="title">Ordenar por Título</option>
          <option value="date">Ordenar por Fecha</option>
        </select>
      </div>

      <form onSubmit={handleAddPost} className="new-post-form">
        <input
          type="text"
          placeholder="Título de la publicación"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Contenido de la publicación"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
        ></textarea>
        <button type="submit">Agregar Publicación</button>
      </form>

      {filteredPosts.map((post) => (
        <div key={post.id} className="card">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p className="post-date">Publicado el: {post.date.toLocaleDateString()}</p>
          <button onClick={() => alert(`Leyendo: ${post.title}`)}>Leer más</button>
          <div className="comments">
            <h3>Comentarios</h3>
            {post.comments.length > 0 ? (
              <ul>
                {post.comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            ) : (
              <p>No hay comentarios aún.</p>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const comment = e.target.elements.comment.value;
                if (comment.trim()) {
                  handleAddComment(post.id, comment);
                  e.target.reset();
                }
              }}
            >
              <input
                type="text"
                name="comment"
                placeholder="Escribe un comentario..."
                required
              />
              <button type="submit">Comentar</button>
            </form>
          </div>
        </div>
      ))}

      <footer>
        <p>© 2025 Blog de Publicaciones. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;