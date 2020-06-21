import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';
import { theme } from '../UiComponents/theme';

class MyApp extends App {
	render() {
		const { Component } = this.props;

		return (
			<ThemeProvider theme={theme}>
				<Page>
					<Component />
				</Page>
			</ThemeProvider>
		);
	}
}

export default MyApp;
