/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const homeStyle = css`
  background-color: pink;
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const headerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  height: 100vh;
`;

const titleStyle = css`
  text-align: center;
  h1 {
    font-size: 5rem;
    text-shadow: 0px 4px 10px #6c757d;
  }
  h2 {
    font-size: 2rem;
    color: #6c757d;
  }
`;

const buttonStyle = css`
  margin-left: 10%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const getStartedButton = css`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  border-radius: 150px;
  background-color: #038cfc;
  color: white;
  border: none;
  transition: 0.3s ease;
  p {
    transition: 0.3s ease-in-out;
  }
  svg {
    transition: 0.3s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    background-color: #0d6efd;
    transform: scale(1.1);
    svg {
      transform: translateX(120%);
    }
  }
`;

const loginButton = css`
  border: none;
  font-size: 1rem;
  background-color: transparent;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #0d6efd;
  }
`;

const sectionStyle = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 2s ease, transform 0.8s ease;
  background-color: pink;
  font-size: 10rem;
`;

const Home = () => {
  const navigate = useNavigate();
  const scrollPositions = [0, 100, 200];
  const [currentPosition, setCurrentPosition] = useState(0);
  const [hasShownAnimation, setHasShownAnimation] = useState([false, false, false]);

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    const newPositionIndex = currentPosition + direction;

    if (newPositionIndex >= 0 && newPositionIndex < scrollPositions.length) {
      setCurrentPosition(newPositionIndex);

      if (!hasShownAnimation[newPositionIndex]) {
        const newHasShownAnimation = [...hasShownAnimation];
        newHasShownAnimation[newPositionIndex] = true;
        setHasShownAnimation(newHasShownAnimation);
      }

      const newScrollPosition = scrollPositions[newPositionIndex] * window.innerHeight / 100;
      window.scrollTo({ top: newScrollPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentPosition, hasShownAnimation]);

  useEffect(() => {
    if (currentPosition === 0) {
      setHasShownAnimation([false, false, false]); // Reset animation state when currentPosition is 0
    }
  }, [currentPosition]);

  return (
    <div css={homeStyle}>
      <div css={headerStyle} id="header">
        <div css={titleStyle}>
          <h1>Membrant</h1>
          <h2>"For every minute spent organizing, an hour is earned" - Benjamin Franklin</h2>
        </div>
        <div css={buttonStyle}>
          <button css={getStartedButton} onClick={() => navigate("/signup")}>
            <p>Get Started</p> <FiArrowRight />
          </button>
          <button css={loginButton} onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
      <div css={[sectionStyle, hasShownAnimation[1] && { opacity: 1, transform: 'translateY(0)' }]}>
        <p>This is a dummy section with some filler content.</p>
      </div>
      <div css={[sectionStyle, hasShownAnimation[2] && { opacity: 1, transform: 'translateY(0)' }]}>
        <p>Another section with more filler content here.</p>
      </div>
    </div>
  );
};

export default Home;
