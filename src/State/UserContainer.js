
class UserContainer extends Container {
  state = {
    uid: "Udapure",
    name: null,
    username: null
  };

  setuid = u => {
    this.setState({ uid: u });
  };
}

export default UserContainer;
