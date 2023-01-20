/*
 * 사이드바 컴포넌트의 총 화면을 렌더링합니다.
 */
import { AiFillHome, AiFillLike } from 'react-icons/ai';
import {
	MdOutlineExplore,
	MdSubscriptions,
	MdVideoLibrary,
	MdHistory,
	MdWatchLater,
	MdSettings,
	MdFlag,
} from 'react-icons/md';
import { useMatch } from 'react-router-dom';
import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import styled from 'styled-components';
import SideBarSection from './SideBarSection';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

const iconSize = 24;
const list = {
	section1: [
		{
			icon: <AiFillHome size={iconSize} />,
			title: 'Home',
		},
		{
			icon: <MdOutlineExplore size={iconSize} />,
			title: 'Explore',
		},
		{
			icon: <MdSubscriptions size={iconSize} />,
			title: 'Subscriptions',
		},
	],
	section2: [
		{
			icon: <MdVideoLibrary size={iconSize} />,
			title: 'Library',
		},
		{
			icon: <MdHistory size={iconSize} />,
			title: 'History',
		},
		{
			icon: <MdWatchLater size={iconSize} />,
			title: 'Watch later',
		},
		{
			icon: <AiFillLike size={iconSize} />,
			title: 'Liked videos',
		},
	],
	section3: [
		{
			icon: <MdSettings size={iconSize} />,
			title: 'Settings',
		},
		{
			icon: <MdFlag size={iconSize} />,
			title: 'Report history',
		},
	],
};

const SNB = ({ toggleSNB }) => {
	const size = useWindowSize();
	const location = useLocation();
	const notDetailPage = location.pathname === '/' || location.pathname === '/search';
	console.log('notDetailPage', notDetailPage);

	return (
		<Container toggleSNB={toggleSNB} notDetailPage={notDetailPage}>
			<SideBarSection toggleSNB={toggleSNB} section={list.section1} />
			<SideBarSection toggleSNB={toggleSNB} section={list.section2} />
			<SideBarSection toggleSNB={toggleSNB} section={list.section3} />
		</Container>
	);
};

export default SNB;

const Container = styled.nav<{ toggleSNB: boolean; notDetailPage: boolean }>`
	background-color: #212529;
	position: fixed;
	top: 60px;
	height: 100%;
	overflow: auto;
	color: white;
	width: ${(props) => (props.toggleSNB ? '250px' : props.notDetailPage ? '90px' : '0px')};
	z-index: 1;
`;
