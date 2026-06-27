* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f172a;
  overflow: hidden;
}

/* Animated background */
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff004c, #00c6ff, #7b2ff7, #00ff88);
  background-size: 400% 400%;
  animation: bg 10s infinite alternate;
  z-index: -1;
}

@keyframes bg {
  0% {background-position: left;}
  100% {background-position: right;}
}

.container {
  width: 350px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(10px);
  text-align: center;
  color: white;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
  animation: pop 0.8s ease;
}

@keyframes pop {
  from {transform: scale(0.5); opacity: 0;}
  to {transform: scale(1); opacity: 1;}
}

input {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  border: none;
  border-radius: 10px;
  outline: none;
}

.bar {
  width: 100%;
  height: 12px;
  background: #333;
  border-radius: 10px;
  margin-top: 15px;
  overflow: hidden;
}

#bar-fill {
  height: 100%;
  width: 0%;
  transition: 0.5s;
  border-radius: 10px;
}

#label {
  margin-top: 10px;
  font-weight: bold;
}

/* Colors */
.weak { background: red; width: 30%; }
.medium { background: orange; width: 65%; }
.strong { background: limegreen; width: 100%; }
