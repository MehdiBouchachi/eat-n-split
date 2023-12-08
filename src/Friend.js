import { Button } from "./Button";

export function Friend({ friend, SelectedFriend, handleSelection }) {
  const isSelected = SelectedFriend?.id === friend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {Number(friend.balance)} $
        </p>
      ) : friend.balance < 0 ? (
        <p className="red">
          you owe {friend.name} {friend.balance}${" "}
        </p>
      ) : (
        <p>You and {friend.name} are even</p>
      )}
      <Button onClick={() => handleSelection(friend)}>
        {isSelected ? "Close" : "select"}
      </Button>
    </li>
  );
}
