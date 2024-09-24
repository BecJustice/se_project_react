import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ onCardClick, clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothes-section"></section>
      <ClothesSection onCardClick={onCardClick} clothingItems={clothingItems} />
    </div>
  );
}

export default Profile;
