const Notification = ({ message, isError }) => {
  if (message === null) return null;

  return (
    <>
      <h5 className={isError ? 'err-message' : 'message'}>{message}</h5>
    </>
  );
};

export default Notification;
