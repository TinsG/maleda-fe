import React from "react";

function Card() {
  return (
    <>
      <div>
        <img src="https://picsum.photos/200/300" alt="img" />
        <div>
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <a href="https://www.lipsum.com/" target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
