//todo: fill with data

export const side_panel_data = {

	"mpipe_dwg": {
		"title": "MPIPE_Drawings",
		"fields": {
			"DWGiddate": {
				"label": "Date", 
				"type": "date",
				"options": [],
			},

			"DWGdisc": {
				"label": "DWGdisc", 
				"type": "text",
				"options": [],
			},

			"DWGtype": {
				"label": "Drawing Type",
				"type": "select",
				"options": ["ISO",], 
			},

			"DWGno": {
				"label": "Drawing No.",
				"type": "text",
				"options": [], 
			},

			"DWGshtno": {
				"label": "Drawing sheet No.",
				"type": "text",
				"options": [],
			},
			
			"DWGrev": {
				"label": "Drawing revision No.",
				"type": "text",
				"options": [],
			},

			"LNEidno": {
				"label": "Line ID No.",
				"type": "text",
				"options": ["Line-210-HS-P10", "Line-010-EK-P72", "Line-070-SP-P71", "Line-057-J-P376", "Line-063-PP-P20", "Line-067-PP-P20", "Line-050-LS-P519", "Line-545-FH-P10"],
			},

			"DWGname": {
				"label": "Drawing Name",
				"type": "text",
				"options": [],
			},

			"DWGselect_add": {
				"label": "Drawing select add",
				"type": "checkbox",
				"options": [],
			},

			"DWG_AB": {
				"label": "DWG_AB",
				"type": "checkbox",
				"options": [],
			},

			"DWG_RL": {
				"label": "DWG_RL",
				"type": "checkbox",
				"options": [],
			},

			"DWG_FLTR": {
				"label": "DWG_FLTR",
				"type": "checkbox",
				"options": [],
			},
		},
	},


	"mpipe_linelist": {
		"title": "MPIPE_Line List",
		"fields": {
			"LNEidedate":  {
				"label": "Date", 
				"type": "date",
				"options": [],
			},


		  	"LNEno": {
				"label": "Line No.", 
				"type": "text",
				"options": [],
			},


		  	"LNEFrom": {
				"label": "Line From", 
				"type": "text",
				"options": [],
			},


			"LNETo": {
				"label": "Line To", 
				"type": "text",
				"options": [],
			},


			"LNEsystem": {
				"label": "Line system", 
				"type": "text",
				"options": [],
			},


			"LNEsysdes": {
				"label": "Line system desc.", 
				"type": "text",
				"options": [],
			},


			"LNEsysarea": {
				"label": "Line system area", 
				"type": "text",
				"options": [],
			},


			"LNErefpid": {
				"label": "LNErefpid", 
				"type": "text",
				"options": [],
			},


			"LNErefpidrev": {
				"label": "LNErefpidrev", 
				"type": "text",
				"options": [],
			},

			"LNEsyscode": {
				"label": "LNEsyscode", 
				"type": "text",
				"options": [],
			},


			"LNEspec": {
				"label": "LNEspec", 
				"type": "text",
				"options": [],
			},


			"LNEoptemp": {
				"label": "LNEoptemp", 
				"type": "text",
				"options": [],
			},

			"LNEdesigndens": {
				"label": "LNEdesigndens", 
				"type": "text",
				"options": [],
			},


			"LNEpwht": {
				"label": "LNEpwht", 
				"type": "checkbox",
				"options": [],
			},

			"LNE_VT": {
				"label": "Line VT", 
				"type": "text",
				"options": [],
			},


			"LNE_RT": {
				"label": "Line RT", 
				"type": "text",
				"options": [],
			},


			"LNE_MT": {
				"label": "Line MT", 
				"type": "text",
				"options": [],
			},

			"LNE_PT": {
				"label": "Line PT", 
				"type": "text",
				"options": [],
			},


			"LNE_UT": {
				"label": "Line UT", 
				"type": "text",
				"options": [],
			},


			"LNE_HT": {
				"label": "Line HT", 
				"type": "text",
				"options": [],
			},


			"LNE_MI": {
				"label": "Line MI", 
				"type": "text",
				"options": [],
			},


			"LNEtesttype": {
				"label": "Line test type", 
				"type": "text",
				"options": [],
			},

			"LNEtestpress": {
				"label": "Line test press", 
				"type": "text",
				"options": [],
			},


			"LNEcolor": {
				"label": "Line color", 
				"type": "text",
				"options": [],
			},

			"LNEtracing": {
				"label": "Line tracing", 
				"type": "text",
				"options": [],
			},


			"LNEinsulation": {
				"label": "Line insulation", 
				"type": "checkbox",
				"options": [],
			},


			"LNEInstype": {
				"label": "Line insulation type", 
				"type": "text",
				"options": [],
			},

			"LNEinsTm": {
				"label": "LineinsTm", 
				"type": "text",
				"options": [],
			},

			"LNE_CWP": {
				"label": "Line CWP", 
				"type": "text",
				"options": [],
			},

			"LNE_CA": {
				"label": "Line CA", 
				"type": "text",
				"options": [],
			},

			"LNEflgrating": {
				"label": "Line flange rating", 
				"type": "text",
				"options": [],
			},

			"INRidno": {
				"label": "INR ID No.", 
				"type": "select",
				"options": [1, 2, 3, 4, 5],
			},

			"LNE_pickme": {
				"label": "LNE_pickme", 
				"type": "checkbox",
				"options": [],
			},

			"LNEdesignpress": {
				"label": "Line design press", 
				"type": "text",
				"options": [],
			},

			"LNEtestpack": {
				"label": "Line test pack", 
				"type": "text",
				"options": [],
			},

		},
	},


	'mpipe_bonds': {
		"title": "MPIPE_Bonds",
		"fields": {
			"Bidedate": {
				"label": "Date", 
				"type": "date",
				"options": [],
			},

			"DWGidno": {
				"label": "Drawing ID No.", 
				"type": "select",
				"options": [1, 2, 12, 3, 1, 5, 9],
			},

			"Bno": {
				"label": "Bond No.", 
				"type": "text",
				"options": [],
			},

			"Bmat": {
				"label": "Bond Material", 
				"type": "text",
				"options": [],
			},

			"Bsize": {
				"label": "Bond Size", 
				"type": "text",
				"options": [],
			},

			"Btm": {
				"label": "Btm", 
				"type": "text",
				"options": [],
			},

			"Btype": {
				"label": "Bond type", 
				"type": "text",
				"options": [],
			},

			"Bpro": {
				"label": "Bpro", 
				"type": "text",
				"options": [],
			},

			"Btrade": {
				"label": "Bonder(s)", 
				"type": "text",
				"options": [],
			},

			"Bdate": {
				"label": "Date", 
				"type": "date",
				"options": [],
			},

			"Binproinsp": {
				"label": "Binproinsp", 
				"type": "checkbox",
				"options": [],
			},

			"Bvt": {
				"label": "Bvt", 
				"type": "text",
				"options": [],
			},

			"Blotno": {
				"label": "Bond Lot No.", 
				"type": "text",
				"options": [],
			},

			"Brework": {
				"label": "Brework", 
				"type": "text",
				"options": [],
			},

			"Bcutout": {
				"label": "Binproinsp", 
				"type": "checkbox",
				"options": [],
			},

			"Brepno":  {
				"label": "Bond Repair No.", 
				"type": "text",
				"options": [],
			},

			"BVTinsp": {
				"label": "BVTinsp", 
				"type": "text",
				"options": [],
			},

			"BVTdate": {
				"label": "BVTdate", 
				"type": "date",
				"options": [],
			},

			"RVTidno":  {
				"label": "Rivet id No.", 
				"type": "select",
				"options": [1, 3, 6, 7, 13, 15, 16],
			},

			"Brepatt": {
				"label": "Brepatt", 
				"type": "text",
				"options": [],
			},

			"Bcomm": {
				"label": "Bcomm", 
				"type": "text",
				"options": [],
			},
		},
	},


}