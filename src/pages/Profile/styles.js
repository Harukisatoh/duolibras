import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    profileInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 2
    },

    basicInfo: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 10
    },

    name: {
        fontSize: 22,
        fontFamily: 'Poppins_700Bold'
    },

    date: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular'
    },

    profileImageContainer: {
        justifyContent: 'center'
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },

    statisticsContainer: {
        padding: 20
    },

    statisticsText: {
        fontSize: 21,
        fontFamily: 'Poppins_700Bold'
    },

    statisticsContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    experienceContainer: {
        flex: 1,
        marginRight: 10,
        borderWidth: 2,
        borderRadius: 12,
        flexDirection: 'row',
        padding: 7
    },

    moneyContainer: {
        flex: 1,
        marginLeft: 10,
        borderWidth: 2,
        borderRadius: 12,
        flexDirection: 'row',
        padding: 7
    },

    experienceIcon: {
        marginRight: 8
    },

    experienceInfo: {
        flex: 1
    },

    moneyInfo: {
        flex: 1
    },

    experienceTitle: {
        fontSize: 20,
        fontFamily: 'Poppins_700Bold'
    },

    moneyTitle: {
        fontSize: 20,
        fontFamily: 'Poppins_700Bold'
    },

    experienceDescription: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular'
    },

    moneyDescription: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular'
    },

    badgesContainer: {
        paddingHorizontal: 20,
        marginBottom: 20
    },

    badgesText: {
        fontSize: 21,
        fontFamily: 'Poppins_700Bold'
    },

    badgesContent: {
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 12
    },

    badgeContainer: {
        padding: 7,
        flexDirection: 'row'
    },

    badgeIconContainer: {
        borderBottomWidth: 6,
        borderRightWidth: 6,
        borderRadius: 15,
        borderBottomLeftRadius: 7,
        paddingHorizontal: 5,
        paddingVertical: 10
    },

    badgeQuantityIconContainer: {
        position: 'absolute',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 20,
        right: 0,
        bottom: -7
    },

    badgeQuantityIconText: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular'
    },

    badgeImage: {
        width: 66,
        height: 77,
        borderRadius: 15,
        borderBottomLeftRadius: 7
    },

    badgeQuantityImageContainer: {
        position: 'absolute',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 50,
        right: 0,
        bottom: 0
    },

    badgeQuantityImageText: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular'
    },

    badgeInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    badgeBottomDivision: {
        borderBottomWidth: 2
    },

    emptyBadgeTitle: {
        fontSize: 16,
        fontFamily: 'Poppins_700Bold',
        alignSelf: 'center',
        padding: 15
    },

    badgeTitle: {
        fontSize: 20,
        fontFamily: 'Poppins_700Bold'
    },

    badgeDescription: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular'
    }
})

export default styles
