"use client";

import { Tab } from "@headlessui/react";
import { ReactNode } from "react";
import { Results } from "./Results";

function StyledTab(props: { children: ReactNode }) {
	return (
		<Tab
			{...props}
			className="transition-all duration-300 outline-none py-2 px-4 rounded-lg flex-1 ui-selected:shadow-lg ui-selected:text-orange-500 ui-selected:bg-white"
		/>
	);
}

export function Tabs() {
	return (
		<Tab.Group defaultIndex={0}>
			<Tab.List className="flex gap-4 p-2 bg-gray-100 rounded-xl">
				<StyledTab>Geral</StyledTab>
				<StyledTab>Categorias</StyledTab>
			</Tab.List>
			<Tab.Panels className="flex-1 overflow-hidden flex flex-col">
				<Tab.Panel className="h-full">
					<div className="flex flex-col justify-between h-full">
						<Results title="Guardado esse mês" expected={0} real={-100} />
						<Results title="Entradas" expected={0} real={100} />
						<Results title="Saídas" expected={0} real={100} />
					</div>
				</Tab.Panel>
				<Tab.Panel className="flex flex-col overflow-hidden">
					<div className="flex flex-col overflow-hidden">
						<div>header</div>
						<div className="overflow-auto bg-gray-100">
							<div style={{ height: "500px" }}></div>
						</div>
					</div>
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
}

/*

<div className="flex flex-1 flex-col justify-between pt-10 ">
				<Results title="Guardado esse mês" expected={0} real={-100} />
				<Results title="Entradas" expected={0} real={100} />
				<Results title="Saídas" expected={0} real={100} />
			</div>
			*/
