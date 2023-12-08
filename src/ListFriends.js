import { Friend } from "./Friend";

export function ListFriends({ friends, SelectedFriend, handleSelection }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            SelectedFriend={SelectedFriend}
            handleSelection={handleSelection}
          />
        ))}
      </ul>
    </div>
  );
}
