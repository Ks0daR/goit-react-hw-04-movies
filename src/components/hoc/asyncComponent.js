import React, { Component } from 'react';

const acyncComponent = ({ loader, loading: Loading }) => {
  return class AcyncComponent extends Component {
    state = {
      component: null,
    };
    async componentDidMount() {
      const { default: component } = await loader();

      this.setState({ component });
    }
    render() {
      const { component: LoadedComponent } = this.state;

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <Loading />
      );
    }
  };
};

export default acyncComponent;
