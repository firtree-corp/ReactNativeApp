import * as React from 'react';
import { View, Text } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import CharacterSheet from '../CharacterSheet/characterSheet';
import Dice from '../Dices/dice';

class BottomNavBar extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'characterSheet', title: 'Personnage', icon: 'assignment-ind' },
            { key: 'dice', title: 'Dés', icon: { uri: 'https://flaticons.net/gd/makefg.php?i=icons/Sports/Dice.png&r=255&g=255&b=255' } }
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        dice: Dice,
        characterSheet: CharacterSheet,
    });

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}

export default (BottomNavBar);