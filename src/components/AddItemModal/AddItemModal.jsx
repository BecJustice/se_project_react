import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ onClose, isOpen, onAddItem }) => {
  const [name, setName] = useState("");
  console.log(name);
  const [imageUrl, setUrl] = useState("");
  const [weather, setSelectedWeatherType] = useState("");

  //need to ad values onchange to url and temp

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
    resetForm();
  };

  function resetForm() {
    setName("");
    setUrl("");
    setSelectedWeatherType("");
  }

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          onChange={(event) => setUrl(event.target.value)}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            name="radioButton"
            type="radio"
            className="modal__radio-input"
            value="hot"
            checked={weather === "hot"}
            onChange={(event) => setSelectedWeatherType(event.target.value)}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            name="radioButton"
            type="radio"
            className="modal__radio-input"
            value="hot"
            checked={weather === "warm"}
            onChange={(event) => setSelectedWeatherType(event.target.value)}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            name="radioButton"
            type="radio"
            className="modal__radio-input"
            value="hot"
            checked={weather === "cold"}
            onChange={(event) => setSelectedWeatherType(event.target.value)}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
