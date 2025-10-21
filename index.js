import React, {useState} from 'react';
import {AppRegistry, View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GlassCardApp = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {id: 1, title: '💳 Premium Card', balance: '$12,450', gradient: ['#FF6B9D', '#C86DD7']},
    {id: 2, title: '🎯 Business Card', balance: '$8,320', gradient: ['#4FACFE', '#00F2FE']},
    {id: 3, title: '🌟 Gold Card', balance: '$24,890', gradient: ['#FFD89B', '#FF9A56']},
  ];

  return (
    <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cards</Text>
        <Text style={styles.headerSubtitle}>Glassmorphism Design</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            activeOpacity={0.9}
            onPress={() => setSelectedCard(card.id === selectedCard ? null : card.id)}>
            <LinearGradient
              colors={card.gradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={[styles.card, selectedCard === card.id && styles.cardSelected]}>
              <View style={styles.glassOverlay}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardBalance}>{card.balance}</Text>
                
                <View style={styles.cardFooter}>
                  <View>
                    <Text style={styles.cardLabel}>Card Number</Text>
                    <Text style={styles.cardValue}>**** **** **** {1234 + card.id}</Text>
                  </View>
                  <View style={styles.cardChip}>
                    <View style={styles.chipInner} />
                  </View>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}

        <View style={styles.statsContainer}>
          <StatCard icon="📊" title="Total Balance" value="$45,660" color="#4FACFE" />
          <StatCard icon="💸" title="Spent This Month" value="$2,340" color="#FF6B9D" />
        </View>

        <View style={styles.actionsContainer}>
          <ActionButton icon="➕" label="Add Card" color="#50C878" />
          <ActionButton icon="📤" label="Transfer" color="#4A90E2" />
          <ActionButton icon="⚙️" label="Settings" color="#9B59B6" />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const StatCard = ({icon, title, value, color}) => (
  <View style={[styles.statCard, {borderLeftColor: color}]}>
    <Text style={styles.statIcon}>{icon}</Text>
    <View style={styles.statContent}>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  </View>
);

const ActionButton = ({icon, label, color}) => (
  <TouchableOpacity style={[styles.actionBtn, {backgroundColor: color}]} activeOpacity={0.8}>
    <Text style={styles.actionIcon}>{icon}</Text>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20},
  headerTitle: {fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 5},
  headerSubtitle: {fontSize: 16, color: 'rgba(255,255,255,0.8)'},
  scrollView: {flex: 1},
  scrollContent: {paddingHorizontal: 20, paddingBottom: 30},
  card: {height: 200, borderRadius: 20, marginBottom: 20, padding: 20, shadowColor: '#000', shadowOffset: {width: 0, height: 10}, shadowOpacity: 0.3, shadowRadius: 20, elevation: 10},
  cardSelected: {transform: [{scale: 1.02}]},
  glassOverlay: {flex: 1, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 15, padding: 20, backdropFilter: 'blur(10px)'},
  cardTitle: {fontSize: 18, fontWeight: '600', color: '#fff', marginBottom: 10},
  cardBalance: {fontSize: 36, fontWeight: 'bold', color: '#fff', marginBottom: 20},
  cardFooter: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto'},
  cardLabel: {fontSize: 12, color: 'rgba(255,255,255,0.8)', marginBottom: 5},
  cardValue: {fontSize: 14, fontWeight: '600', color: '#fff'},
  cardChip: {width: 50, height: 40, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 8, padding: 5},
  chipInner: {flex: 1, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 4},
  statsContainer: {marginVertical: 10},
  statCard: {backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 15, padding: 15, marginBottom: 15, flexDirection: 'row', alignItems: 'center', borderLeftWidth: 4},
  statIcon: {fontSize: 30, marginRight: 15},
  statContent: {flex: 1},
  statTitle: {fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: 5},
  statValue: {fontSize: 24, fontWeight: 'bold', color: '#fff'},
  actionsContainer: {flexDirection: 'row', justifyContent: 'space-between', marginTop: 10},
  actionBtn: {flex: 1, height: 70, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5},
  actionIcon: {fontSize: 24, marginBottom: 5},
  actionLabel: {fontSize: 12, fontWeight: '600', color: '#fff'},
});

AppRegistry.registerComponent('GlassCardApp', () => GlassCardApp);
export default GlassCardApp;

