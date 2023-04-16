import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RuleFilterProvider } from './main_app_view/context_providers/RuleFilterContext.jsx'
import { SidePanelProvider } from './main_app_view/context_providers/SidePanelContext.jsx'

import { MainAppRoute } from './main_app_view/main_app'

export function AppRouter(props) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={
					<div>
						<RuleFilterProvider>
						<SidePanelProvider>
							<MainAppRoute/>
						</SidePanelProvider>
						</RuleFilterProvider>
					</div>
				} />

				<Route path="/about" element={
					<div>
						<p>about</p>
					</div>
				} />

			</Routes>
		</BrowserRouter>
	)
}