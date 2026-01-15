pkg update && pkg upgrade -y
pkg install git -y
pkg install nodejs -y
pkg install ffmpeg -y
pkg install imagemagick -y
git clone https://github.com/Renanvargas/Vemonbot3.git
cd Vemonbot3
npm install
node start.js        # ou outro arquivo de entrada
