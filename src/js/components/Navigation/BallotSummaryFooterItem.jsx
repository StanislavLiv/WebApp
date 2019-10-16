import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class BallotSummaryFooterItem extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor (props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount () {
    const { children } = this.props;
  }

  componentWillReceiveProps (nextProps) {
    const { children } = nextProps;
  }

  render () {
    // console.log('BallotSummaryFooterItem render');
    const {
      props: { children },
    } = this;

    return (
      <>
        {children.map((child) => {
          if (child && child.props && child.props.label) {
            return (
              <Column className="col col-4">
                <Card>
                  <Title>{child.props.label}</Title>
                  <Body>{child.props.children}</Body>
                </Card>
              </Column>
            );
          } else {
            return null;
          }
        })
        }
      </>
    );
  }
}

const Column = styled.div`
  padding: 0 8px !important;
`;

const Card = styled.div`
  border-radius: 3px;
  border: 1px solid #ddd;
  padding: 16px;
`;

const Title = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
`;

const Body = styled.div`
  width: 100%;
`;

export default BallotSummaryFooterItem;
