url = 'http://localhost:3000';
const SaveAsMenu = document.querySelector('.saveAs')
const SaveButton = document.querySelector('.saveBtn')
const CancelButton = document.querySelector('.cancelBtn')
const Input = document.querySelector('.input')

let SceneContainer = document.getElementById('Canvas'); 

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#c4c8cf',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    parent: 'Canvas',
    physics: {
    default: 'arcade',
    arcade: {
        debug: false
    }
}
};

const game = new Phaser.Game(config)

function preload() {
// main assets
this.load.image('grass', './assets/Grass.png')
this.load.image('woodenSideBar', './assets/woodenSideBar.jpeg')
this.load.image('btn', './assets/woodenPlate.jpg')
this.load.image('resetButton', './assets/Replay.png')
this.load.image('confirm_sign', './assets/confirm_sign.png')
this.load.image('menu', './assets/menu.png')
this.load.image('deleteButton', './assets/deleteButton.png');

// ./plants golan
this.load.image('flower', './assets/plants/flower.png')
this.load.image('dark_bush', './assets/plants/dark_bush.png')
this.load.image('tree_round_small', './assets/plants/tree_round_small.png')
this.load.image('over_growth', './assets/plants/overGrowth.png')
this.load.image('mushroom', './assets/plants/mushroom.png')
this.load.image('apple_tree', './assets/plants/apple_tree.png')

// ./ground mzaka
this.load.image('pathway', './assets/ground/path_way.png')
this.load.image('fence', './assets/ground/fence.png')
this.load.image('water', './assets/ground/water.png')
this.load.image('grass_path_way', './assets/ground/grass_tile.png')
this.load.image('stone_path_way', './assets/ground/stone_path_way.png')

// ./decor dekoration
this.load.image('chopped_plank', './assets/decor/chopped_plank.png')
this.load.image('fishing_spot', './assets/decor/fishing_spot.png')
this.load.image('pit', './assets/decor/pit.png')
this.load.image('statue', './assets/decor/statue.png')
}

// runs evey frame!
function create(game) {

    let deleteKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DELETE);
    let rotateKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

    let sceneWidth = this.sys.game.config.width;
    let sceneHeight = this.sys.game.config.height;
    let depth_max = 1000;

    const sideBarWidth = 200;

    let borderGraphics = this.add.graphics();
    borderGraphics.lineStyle(4, 0xFFFF00);
    borderGraphics.strokeRect(0, 0, sideBarWidth, sceneHeight);

    // Side bar
    const sideBar = this.add.image(sideBarWidth / 2, sceneHeight / 2, 'woodenSideBar').setDisplaySize(sideBarWidth, sceneHeight);
    const buttonWidth = sideBarWidth / 3;
    const buttonHeight = 60;

    let textStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        fill: '#FFF',
        align: 'center',
        strokeThickness: 0.2,
        fontFamily: 'Serif'
    };


    let vegBtn = this.add.image(buttonWidth / 2, buttonHeight / 2, 'btn').setDisplaySize(buttonWidth, buttonHeight).setInteractive({ useHandCursor: true });
    let vegText = this.add.text(vegBtn.x, vegBtn.y, 'Plants', textStyle).setOrigin(0.5);



    vegBtn.on('pointerdown', function() {
        this.setAlpha(0.7);
    }).on('pointerup', function() {
        this.setAlpha(1);
    });

    let groundBtn = this.add.image(1.5 * buttonWidth, buttonHeight / 2, 'btn').setDisplaySize(buttonWidth, buttonHeight).setInteractive({ useHandCursor: true });
    let groundText = this.add.text(groundBtn.x, groundBtn.y, 'Ground', textStyle).setOrigin(0.5);

    groundBtn.on('pointerdown', function() {
        this.setAlpha(0.7);
    }).on('pointerup', function() {
        this.setAlpha(1);
    });

    let decorBtn = this.add.image(2.5 * buttonWidth, buttonHeight / 2, 'btn').setDisplaySize(buttonWidth, buttonHeight).setInteractive({ useHandCursor: true });
    let decorText = this.add.text(decorBtn.x, decorBtn.y, 'Decor', textStyle).setOrigin(0.5);

    decorBtn.on('pointerdown', function() {
        this.setAlpha(0.7);
    }).on('pointerup', function() {
        this.setAlpha(1);
    });

    const plants = [
        { name: 'Giant Rose', imageKey: 'flower' },
        { name: 'Bush', imageKey: 'dark_bush' },
        { name: 'Mushroom', imageKey: 'mushroom'},
        { name: 'Round Tree', imageKey: 'tree_round_small'},
        { name: 'Apple tree', imageKey: 'apple_tree'},
        { name: 'Overgrown grass', imageKey: 'over_growth'}
    ];

    const ground = [
        { name: 'Pathway', imageKey: 'pathway' },
        { name: 'water', imageKey: 'water'},
        { name: 'Stone Pathway', imageKey: 'stone_path_way'},
        { name: 'Fence', imageKey: 'fence'},
        { name: 'Grass pathway', imageKey: 'grass_path_way'},
    ];

    const decor = [
        { name: 'Statue', imageKey: 'statue' },
        { name: 'Small pit', imageKey: 'pit'},
        { name: 'Chopped plank', imageKey: 'chopped_plank'},
        { name: 'Fishing spot', imageKey: 'fishing_spot'},
    ];

    let sidebarItems = this.add.group();

    function clearSidebarItems() {
        sidebarItems.clear(true, true);
    }

    // sidebar button events click, focus, hover etc..
    vegBtn.on('pointerdown', () => {
        displayItems(this, 'plants');
    });

    groundBtn.on('pointerdown', () => {
        displayItems(this, 'ground');
    });

    decorBtn.on('pointerdown', () => {
        displayItems(this, 'decor');
    });

    //=========== Grass or the main scene ===========//
    const MainScene = this.add.image(sceneWidth / 2 + sideBarWidth / 2, sceneHeight / 2, 'grass').setDisplaySize(sceneWidth - sideBarWidth, sceneHeight);

    // Menu button
    let menuButtonSize = 30;
    const menu = {
        X: sceneWidth - menuButtonSize - 10,
        Y: 10 + menuButtonSize / 2,
        HW: 1
    }
    let menuButton = this.add.image(menu.X, menu.Y + 10, 'btn')
        .setInteractive({ useHandCursor: true }).setDisplaySize(50, 60);
    let menuButtonText = this.add.text(menuButton.x, menuButton.y, 'Menu', textStyle).setOrigin(0.5);

    // black shade for the scene when the menu is open
    let menuShade = this.add.rectangle(0, 0, sceneWidth, sceneHeight, 0x000000, 0.5)
        .setOrigin(0, 0).setVisible(false).setDepth(999).setInteractive({useHandCursor: true});  // Setting a high depth, but lower than the confirmation menu

    // menu box
    let menuWidth = 300;
    let menuHeight = 400;
    let menuImage = this.add.image(sceneWidth / 2, sceneHeight / 2, 'menu')
    .setOrigin(0.5, 0.5).setVisible(false).setDepth(depth_max).setDisplaySize(menuWidth, menuHeight);

    // buttons inside the menu
    const buttonSpacing = 80;
    let buttonYStart = sceneHeight / 2 - (menuHeight / 2) + buttonSpacing;

    const homeButton = this.add.image(sceneWidth / 2, buttonYStart, 'btn')
    .setDisplaySize(100, 50).setDepth(depth_max).setInteractive({ useHandCursor: true }).setVisible(false);
    const homeButtonText = this.add.text(homeButton.x, homeButton.y, 'Home', textStyle)
    .setOrigin(0.5).setDepth(depth_max).setVisible(false);


    // reset button and confirmation menu 
    const resetButton = this.add.image(sceneWidth / 2, buttonYStart + buttonSpacing, 'btn')
    .setDisplaySize(100, 50).setDepth(depth_max).setInteractive({ useHandCursor: true }).setVisible(false);
    const resetButtonText = this.add.text(resetButton.x, resetButton.y, 'Reset', textStyle)

    .setOrigin(0.5).setDepth(depth_max).setVisible(false);
    let confirmBackground = this.add.rectangle(0, 0, sceneWidth, sceneHeight, 0x000000, 0.5)
        .setOrigin(0, 0).setInteractive().setVisible(false).setDepth(depth_max);
    let confirmBox = this.add.image(sceneWidth / 2, sceneHeight / 2, 'confirm_sign')
        .setDisplaySize(300, 200).setOrigin(0.5).setVisible(false).setDepth(depth_max + 1);   
    let confirmText = this.add.text(sceneWidth / 2, sceneHeight / 2 - 20, 'Delete All?', { fontSize: '20px', color: '0xFFFFFF' })
        .setOrigin(0.5).setVisible(false).setDepth(depth_max + 2);

    let yesButton = this.add.image(sceneWidth / 2 - 50, sceneHeight / 2 + 50, 'btn')
        .setOrigin(0.5).setInteractive({ useHandCursor: true }).setVisible(false).setDisplaySize(80, 50).setDepth(depth_max + 2);
    let yesButtonText = this.add.text(yesButton.x, yesButton.y, 'Yes', textStyle).setOrigin(0.5).setVisible(false).setDepth(depth_max + 2);

    let noButton = this.add.image(sceneWidth / 2 + 50, sceneHeight / 2 + 50, 'btn').setVisible(false)
        .setOrigin(0.5).setInteractive({ useHandCursor: true }).setVisible(false).setDisplaySize(80, 50).setDepth(depth_max + 2);
    let noButtonText = this.add.text(noButton.x, noButton.y, 'No', textStyle).setOrigin(0.5).setVisible(false).setDepth(depth_max + 2); 

    const toggleConfirmationMenu = (condition) => {
        confirmBackground.setVisible(condition);
        confirmBox.setVisible(condition);
        confirmText.setVisible(condition);
        yesButton.setVisible(condition);
        noButton.setVisible(condition);
        yesButtonText.setVisible(condition);
        noButtonText.setVisible(condition);
    }


    // save button
    let saveButton = this.add.image(sceneWidth / 2, buttonYStart + 2 * buttonSpacing, 'btn')
    .setDisplaySize(100, 50).setDepth(depth_max).setInteractive({ useHandCursor: true }).setVisible(false);
    let saveButtonText = this.add.text(saveButton.x, saveButton.y, 'Save', textStyle)
    .setOrigin(0.5).setDepth(depth_max).setVisible(false);


    let loadButton = this.add.image(sceneWidth / 2, buttonYStart + 3 * buttonSpacing, 'btn')
    .setDisplaySize(100, 50).setDepth(depth_max).setInteractive({ useHandCursor: true }).setVisible(false);
    let loadButtonText = this.add.text(loadButton.x, loadButton.y, 'Load', textStyle)
    .setOrigin(0.5).setDepth(depth_max).setVisible(false);

    // Toggle menu function
    const toggleMenu = (condition) => {
        menuShade.setVisible(condition);
        menuImage.setVisible(condition);

        loadButton.setVisible(condition);
        loadButtonText.setVisible(condition);
        
        resetButton.setVisible(condition);
        resetButtonText.setVisible(condition)

        homeButton.setVisible(condition);
        homeButtonText.setVisible(condition)

        saveButton.setVisible(condition)
        saveButtonText.setVisible(condition)
    }


    let toolbarWidth = 300; // Adjust as needed
    let toolbarHeight = 60; // Adjust as needed
    let toolbar = this.add.image(sceneWidth / 2, toolbarHeight / 2, 'your_toolbar_image_key').setDisplaySize(toolbarWidth, toolbarHeight);
    toolbar.setVisible(false);


    let deleteButtonSize = 30;
    const deleteButton = this.add.image(toolbar.x - toolbarWidth / 3, toolbar.y, 'deleteButton')
    .setInteractive({ useHandCursor: true }).setDisplaySize(50, 60);
    deleteButton.setVisible(false);

    // on button click & hover & focus events..
    menuButton.on('pointerdown', () => {
        toggleMenu(true);
    });
    menuShade.on('pointerdown', () => {
        toggleMenu(false)
    })
    resetButton.on('pointerdown', () => {
        toggleConfirmationMenu(true);

        yesButton.on('pointerdown', () => {
            placedItemsDetails = []
            placedItems.clear(true, true);
            toggleConfirmationMenu(false);
            toggleMenu(false);
        });
        noButton.on('pointerdown', () => toggleConfirmationMenu(false));
    });

    let saved = false

    homeButton.on('pointerdown', () => {
        window.location.href = 'http://' + window.location.hostname + ':' + window.location.port;
    })


    const deleteItem = () => {
        if (selectedItem) {
            for (let i = 0; i < placedItemsDetails.length; i++) {
                if (placedItemsDetails[i].x === selectedItem.x && placedItemsDetails[i].y === selectedItem.y) {
                    placedItemsDetails.splice(i, 1);
                    break;
                }
            }
            selectedItem.destroy();
            selectedItem = null;
    }}


    const rotateItem = () => {
            if (selectedItem) {
                selectedItem.angle += 45;
                if (selectedItem.angle >= 360) {
                    selectedItem.angle = 0;
                }
        
                // Update the rotation in the placedItemsDetails array
                for (let itemDetails of placedItemsDetails) {
                    if (itemDetails.x === selectedItem.x && itemDetails.y === selectedItem.y) {
                        itemDetails.rotation = selectedItem.angle;
                        break;
                    }
                }
            }
        }
        
    let placedItems = this.physics.add.group();
    let placedItemsDetails = [];
    let selectedItem = null


    function loadItemsFromList(scene, itemsList) {


        for (let itemDetails of itemsList) {

            let item = scene.add.image(itemDetails.x, itemDetails.y, itemDetails.imageKey);

            item.angle = itemDetails.rotation;
            item.setInteractive({ useHandCursor: true });

            placedItems.add(item);
    
            item.on('pointerdown', function (pointer) {
                let offsetX = pointer.x - this.x;
                let offsetY = pointer.y - this.y;
    
                scene.input.on('pointermove', function (pointer) {
                    this.x = pointer.x - offsetX;
                    this.y = pointer.y - offsetY;
                }, this);
    
                this.on('pointerup', function () {
                    scene.input.off('pointermove');
                });
            });
        }
    }


    function updateItemDetails(item) {
        for (let itemDetails of placedItemsDetails) {
                itemDetails.x = item.x;
                itemDetails.y = item.y;
                itemDetails.rotation = item.angle
                console.log(itemDetails.x , itemDetails.y, itemDetails.imageKey,  ' deg: ' + item.angle)
        }
    }

    const itemss = [
        {x: 521.2686446798317, y: 697.8064515513759, imageKey: 'apple_tree', rotation: 180}
    ] 
    
    loadButton.on('pointerdown', () => {
        toggleMenu()
        placedItems.clear(true, true)
        loadItemsFromList(this, itemss);
        placedItemsDetails = []
    })

    function displayItems(scene, category) {
        clearSidebarItems();
    
        let items;
        if (category === 'plants') {  
            items = plants;
        } else if (category === 'ground') {
            items = ground;
        } else if (category === 'decor') {
            items = decor;
        }
    
        const itemSpacing = 100;
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let itemImage = scene.add.image(sideBarWidth / 2, 100 + i * itemSpacing, item.imageKey).setInteractive({ useHandCursor: true });
    
            itemImage.on('pointerdown', function (pointer) {
                let copiedItem = scene.add.image(pointer.x, pointer.y, item.imageKey)
                .setInteractive({useHandCursor: true});
                
                copiedItem.setTint(0xff0000);
                copiedItem.setData('fromSidebar', false);
    
                let offsetX = pointer.x - copiedItem.x;
                let offsetY = pointer.y - copiedItem.y;
    
                scene.input.on('pointermove', function (pointer) {
                    copiedItem.x = pointer.x - offsetX;
                    copiedItem.y = pointer.y - offsetY;
                });
    
                copiedItem.on('pointerup', function () {
                    this.clearTint();
                    scene.input.off('pointermove');
    
                    if (selectedItem) {
                    selectedItem.clearTint();
                    }
    
                    selectedItem = this;
                    this.setTint(0xff0000);
    
                    MainScene.setInteractive().on('pointerdown', function() {
                        if (selectedItem) {
                            selectedItem.clearTint();
                            selectedItem = null;
                        }
                    });
                
    
                    if (this.x <= sideBarWidth + copiedItem.width / 2) {
                        this.x = sideBarWidth + copiedItem.width / 2;
                    }
    
                    placedItems.add(this);
    
                    if (!this.data.get('fromSidebar')) {
                        let itemDetails = {
                            x: this.x,
                            y: this.y,
                            imageKey: item.imageKey,
                            rotation: this.angle
                        };
                        placedItemsDetails.push(itemDetails);
                        console.log(placedItemsDetails)
    
                        // mark new item as placed
                        this.data.set('fromSidebar', true);
                    }
    
                    if (!this.data.get('hasPointerDown')) {
                        this.on('pointerdown', function (pointer) {
                            let offsetX = pointer.x - this.x;
                            let offsetY = pointer.y - this.y;
                            
                            scene.input.on('pointermove', function (pointer) {
                                this.x = pointer.x - offsetX;
                                this.y = pointer.y - offsetY;
                            }, this);
                    
                            this.on('pointerup', function () {
                                updateItemDetails(this)
                                scene.input.off('pointermove');
                            });
                        });
                    
                        this.data.set('hasPointerDown', true);
                    }
                });
            });
    
            let itemName = scene.add.text(sideBarWidth / 2, 140 + i * itemSpacing, item.name, textStyle).setOrigin(0.5);
    
            sidebarItems.add(itemImage);
            sidebarItems.add(itemName); 
        }
    }
    
    deleteKey.on('down', () => deleteItem());
    rotateKey.on('down', () => rotateItem());

    let email = localStorage.getItem('email');

saveButton.on('pointerdown', () => {


    console.log(email);

    // Show the SaveAsMenu
    SaveAsMenu.style.display = 'flex';
    toggleMenu()
    console.log(placedItemsDetails);
});


CancelButton.onclick = (e) => {
    SaveAsMenu.style.display = 'none';
};

SaveButton.onclick = (e) => {
    
    SaveAsMenu.style.display = 'none';

    let inputValue = Input.value;
    console.log(inputValue);

    fetch(url + '/GardenPlanner', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ placedItemsDetails, inputValue })
    })
    .then(response => response.text())
    .then(response => console.log(response))
    .catch(err => console.log(err.message));

};

loadButton.on('pointerdown', () => {
    toggleMenu()
    SaveAsMenu.style.display = 'flex';
    SaveButton.innerHTML = 'Load'
    Input.placeholder = 'Load by name'
    SaveButton.classList.add('LoadButton')
    let LoadButton = document.querySelector('.LoadButton')


    LoadButton.on('pointerdown', () => {
            
    fetch(url + '/GardenPlanner', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.text())
    .then(response => console.log(response))
    .catch(err => console.log(err.message));

})

})

    displayItems(this, 'plants');
}

function update() {


}