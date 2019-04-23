import React from "react";

export default class Gitapi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gitdets: [],
      loading: false
    };
  }

  pull = e => {
    fetch("https://api.github.com/users/" + this.props.gitusername)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ gitdets: data });
        this.setState({ loading: true });
      });

    e.preventDefault();
  };

  renderBox() {
    var stylecard = { width: "18rem", display: "block", margin: "5% auto" };
    var styleimg = { padding: "5% 20%" };

    const avatar = this.state.gitdets.avatar_url
      ? this.state.gitdets.avatar_url
      : "https://cdn-images-1.medium.com/max/1200/1*ekOYsVAtOKFeeJyhv5NVhA.jpeg";
    const uname = this.state.gitdets.login ? this.state.gitdets.login : "";
    const umail = this.state.gitdets.mail
      ? this.state.gitdets.mail
      : "Not found";
    const ucomp = this.state.gitdets.company
      ? this.state.gitdets.company
      : "Not found";
    const location = this.state.gitdets.location
      ? this.state.gitdets.location
      : "Not found";
    const ubio = this.state.gitdets.bio ? this.state.gitdets.bio : "";
    const htmlurl = this.state.gitdets.html_url
      ? this.state.gitdets.html_url
      : "#";

    if (this.state.gitdets.login) {
      return (
        <div className="card shadow rounded" style={stylecard}>
          <img
            className="card-img-top"
            src={avatar}
            height="auto"
            style={styleimg}
            alt={uname}
          />
          <div className="card-body">
            <h5 className="card-title">Username: {uname} </h5>
            <div className="card-text">
              <p>
                <strong>Email</strong> {umail}{" "}
              </p>
              <p>
                <strong>Company:</strong> {ucomp}
              </p>
              <p>
                <strong>Location:</strong> {location}
              </p>
              <p>{ubio}</p>
            </div>
            <a href={htmlurl} target="_blank" className="btn btn-primary" title="Go to GIT">
              Go to GIT
            </a>
          </div>
        </div>
      );
    } else if (this.state.loading) {
      return <div><p class="text-center">Not found</p></div>;
    } else {
    }
  }

  render() {
    return (
      <span>
        <button onClick={this.pull} className="btn btn-primary button_pretiffy">
          Search
        </button>
        {this.renderBox()}
      </span>
    );
  }
}
