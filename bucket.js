const bucketInput = document.getElementById('bucketInput');
const addButton = document.getElementById('addButton');
const bucketList = document.getElementById('bucketList');

// holding list items
let items = [];
function renderList() {
  // Clearing the current list
  bucketList.innerHTML = '';

  // Loop through the items and create list elements
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;

    // Deleting 
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => removeItem(index));

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the ul
    bucketList.appendChild(li);
  });
}

// Function for adding an item
function addItem() {
  const item = bucketInput.value.trim();
  if (item) {
    items.push(item);
    bucketInput.value = '';
    renderList();
  } else {
    alert('Please enter a valid bucket list item');
  }
}

// Function to remove an item from the list
function removeItem(index) {
  items.splice(index, 1); 
  renderList();
}
addButton.addEventListener('click', addItem);

// we can also allow pressing enter using the following code
bucketInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addItem();
  }
})
renderList();
