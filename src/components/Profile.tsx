

const user = {
  name: 'Fulanah bin Fulan',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <div className="text-xs">Developed by: {user.name}</div>
      <img
        className="rounded-full"
        src={user.imageUrl}
        alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
