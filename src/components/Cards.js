import React from 'reactn'; // <-- reactn
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const styles = {
  cards: {
    flexDirection: "row",
    justifyContent: 'center',
    width: "350px",
    borderStyle: "solid",
  }
};
 
// Render all cards in the global state.
export default class Cards extends React.PureComponent {
 
//   componentDidMount() {
 
//     // Hydrate the global state with the response from /api/cards.
//     this.setGlobal(
//       fetch('/api/cards')
//         .then(response => response.json())
 
//         // Set the global `cards` property to the response.
//         .then(cards => ({ cards }))
 
//         // Fail gracefully, set the global `error`
//         //   property to the caught error.
//         .catch(err => ({ error: err }))
//     );
//   }
 
monstersCards = () => {
    const { monstersCards } = this.global;
    return monstersCards.map((monster, id) => {
      return (
        <div style={styles.cards} key={id}>
          <Card >
            <CardImg style={{ width: "250px" }} top src={monster.img} alt="Card image cap" />
              <CardBody>
                <CardTitle>{monster.name}</CardTitle>
                <CardSubtitle>Element : {monster.element}</CardSubtitle>
                <CardText>blablabla blablabla</CardText>
                <Button>Save data</Button>
              </CardBody>
           </Card>
        </div>
        );
      });
    };

  render() {
      console.log(this.global.monstersCards)
    // For each card in the global state, render a Card component.
    // this.global returns the global state,
    //   much the same way this.state returns the local state.
    return (
      <div>
        {this.monstersCards()}
      </div>
    );
  }
}