import React from 'react';
import { fireEvent, render } from 'tests';
import { EmptyPage } from './empty-page/EmptyPage';
import { Products } from './Products';


test("render the correct content", () => {
  const { getByText, getByLabelText, getByPlaceholderText } = render(<Products />);

  expect(getByText("join.tsh.io")).not.toBeNull();
  expect(getByLabelText("Promo")).not.toBeNull();
  expect(getByLabelText("Active")).not.toBeNull();
  expect(getByPlaceholderText("Search")).not.toBeNull();
});

test("Searcher values", () => {
  const { getByPlaceholderText, getByLabelText } = render(<Products />);
  const input: any = getByPlaceholderText("Search");
  const chckbxPromo: any = getByLabelText("Promo");
  const chckbxActive: any = getByLabelText("Active");

  fireEvent.change(input, { target: { value: "test" } });
  fireEvent.change(chckbxPromo, { target: { checked: "checked" } });
  fireEvent.change(chckbxActive, { target: { checked: "checked" } });

  expect(input.value).toBe("test");
  expect(chckbxPromo.checked).toBeTruthy();
  expect(chckbxActive.checked).toBeTruthy();
});

test("Empty page", () => {
  const { getByText } = render(<EmptyPage />);
  expect(getByText('Ooops… It’s empty here')).toBeInTheDocument();
  expect(getByText('There are no products on the list')).toBeInTheDocument();
})



