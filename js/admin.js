/**
 * Tassaout System - Admin Dashboard JavaScript
 * Gestion des fonctionnalités du tableau de bord administrateur
 * Géré par: Alpha Core Nexus & Dana
 */

// Configuration globale
const CONFIG = {
    apiBase: '/api/v1',
    refreshInterval: 30000, // 30 secondes
};

// État de l'application
const appState = {
    isLoading: false,
    user: null,
    data: {
        properties: [],
        clients: [],
        stats: {}
    }
};

/**
 * Initialisation de l'application
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Tassaout Admin Dashboard initialized');
    initializeApp();
});

/**
 * Fonction d'initialisation principale
 */
function initializeApp() {
    console.log('📱 Initializing admin interface...');
    
    // Charger les données initiales
    loadDashboardData();
    
    // Configurer les écouteurs d'événements
    setupEventListeners();
    
    // Mettre à jour automatiquement les données
    setInterval(loadDashboardData, CONFIG.refreshInterval);
    
    console.log('✅ Admin interface loaded successfully');
}

/**
 * Charger les données du tableau de bord
 */
async function loadDashboardData() {
    try {
        appState.isLoading = true;
        console.log('📊 Loading dashboard data...');
        
        // Simuler le chargement des données (sera remplacé par des appels API réels)
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Charger les statistiques
        updateStats();
        
        // Charger les propriétés
        loadProperties();
        
        // Charger les clients
        loadClients();
        
        appState.isLoading = false;
        console.log('✅ Dashboard data loaded');
    } catch (error) {
        console.error('❌ Error loading dashboard data:', error);
        appState.isLoading = false;
    }
}

/**
 * Mettre à jour les statistiques
 */
function updateStats() {
    const stats = {
        properties: 0,
        activeClients: 0,
        transactions: 0,
        revenue: 0
    };
    
    // Mettre à jour les éléments du DOM
    const statCards = document.querySelectorAll('.stat-card');
    const values = [
        stats.properties,
        stats.activeClients,
        stats.transactions,
        `${stats.revenue} DH`
    ];
    
    statCards.forEach((card, index) => {
        const valueElement = card.querySelector('.stat-value');
        if (valueElement) {
            valueElement.textContent = values[index];
        }
    });
}

/**
 * Charger les propriétés
 */
function loadProperties() {
    console.log('🏠 Loading properties...');
    const tbody = document.querySelector('.properties-table tbody');
    
    if (!tbody) return;
    
    // Vider le tableau
    tbody.innerHTML = '';
    
    // Afficher un message si aucune propriété
    if (appState.data.properties.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem;">Aucune propriété pour le moment</td></tr>';
        return;
    }
    
    // Ajouter les propriétés au tableau
    appState.data.properties.forEach(property => {
        const row = createPropertyRow(property);
        tbody.appendChild(row);
    });
}

/**
 * Créer une ligne de propriété
 */
function createPropertyRow(property) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${property.id || 'N/A'}</td>
        <td>${property.address || 'N/A'}</td>
        <td>${property.type || 'N/A'}</td>
        <td>${property.price || 'N/A'} DH</td>
        <td><span class="status-badge">${property.status || 'Actif'}</span></td>
        <td>
            <button class="btn-edit" onclick="editProperty(${property.id})">✏️ Modifier</button>
            <button class="btn-delete" onclick="deleteProperty(${property.id})">🗑️ Supprimer</button>
        </td>
    `;
    return row;
}

/**
 * Charger les clients
 */
function loadClients() {
    console.log('👥 Loading clients...');
    const tbody = document.querySelector('.clients-table tbody');
    
    if (!tbody) return;
    
    // Vider le tableau
    tbody.innerHTML = '';
    
    // Afficher un message si aucun client
    if (appState.data.clients.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem;">Aucun client pour le moment</td></tr>';
        return;
    }
    
    // Ajouter les clients au tableau
    appState.data.clients.forEach(client => {
        const row = createClientRow(client);
        tbody.appendChild(row);
    });
}

/**
 * Créer une ligne de client
 */
function createClientRow(client) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${client.id || 'N/A'}</td>
        <td>${client.name || 'N/A'}</td>
        <td>${client.email || 'N/A'}</td>
        <td>${client.phone || 'N/A'}</td>
        <td><span class="status-badge">${client.status || 'Actif'}</span></td>
        <td>
            <button class="btn-edit" onclick="editClient(${client.id})">✏️ Modifier</button>
            <button class="btn-delete" onclick="deleteClient(${client.id})">🗑️ Supprimer</button>
        </td>
    `;
    return row;
}

/**
 * Configurer les écouteurs d'événements
 */
function setupEventListeners() {
    // Bouton ajouter propriété
    const addPropertyBtn = document.querySelector('.properties-section .btn-primary');
    if (addPropertyBtn) {
        addPropertyBtn.addEventListener('click', () => {
            console.log('➕ Adding new property...');
            alert('Formulaire d\'ajout de propriété - À implémenter');
        });
    }
    
    // Bouton ajouter client
    const addClientBtn = document.querySelector('.clients-section .btn-primary');
    if (addClientBtn) {
        addClientBtn.addEventListener('click', () => {
            console.log('➕ Adding new client...');
            alert('Formulaire d\'ajout de client - À implémenter');
        });
    }
}

/**
 * Modifier une propriété
 */
function editProperty(id) {
    console.log(`✏️ Editing property ${id}...`);
    alert(`Modification de la propriété ${id} - À implémenter`);
}

/**
 * Supprimer une propriété
 */
function deleteProperty(id) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer la propriété ${id}?`)) {
        console.log(`🗑️ Deleting property ${id}...`);
        alert(`Suppression de la propriété ${id} - À implémenter`);
    }
}

/**
 * Modifier un client
 */
function editClient(id) {
    console.log(`✏️ Editing client ${id}...`);
    alert(`Modification du client ${id} - À implémenter`);
}

/**
 * Supprimer un client
 */
function deleteClient(id) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le client ${id}?`)) {
        console.log(`🗑️ Deleting client ${id}...`);
        alert(`Suppression du client ${id} - À implémenter`);
    }
}

/**
 * API Calls (à développer)
 */

/**
 * Appel API générique
 */
async function apiCall(endpoint, method = 'GET', data = null) {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        
        if (data) {
            options.body = JSON.stringify(data);
        }
        
        const response = await fetch(`${CONFIG.apiBase}${endpoint}`, options);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('❌ API Call Error:', error);
        throw error;
    }
}

console.log('🎯 Alpha Core Nexus & Dana - Admin Dashboard Ready');
