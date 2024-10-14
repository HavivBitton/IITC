const elPostList = document.querySelector("#post-list");

const getAllPosts = async () => {
  try {
    const { data } = await axios.get(
      "https://api-playground-ten.vercel.app/posts"
    );
    data.forEach((post) => {
      console.log(post.title);
      elPostList.innerHTML += `
        <li>
          <div>
              <h2> ${post.title}</h2>
              <p>${post.content}</p>
           </div>
        </li>
        `;
    });
  } catch (error) {
    console.error(
      "Error fetching posts:",
      error.response?.data || error.message
    );
  }
};

getAllPosts();
