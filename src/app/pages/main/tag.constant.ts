export enum TagConstant {
  SPPopeReelSpeed = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.RD_ACT_SPEED',
  SPHelper = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.P1_H_ACT_SPEED',
  SPPress01 = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.P1_ACT_SPEED',
  SPPress02 = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.P2_ACT_SPEED',
  SPOffsetPress = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.PO_ACT_SPEED',
  SPDry01Bottom = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.D1I_ACT_SPEED',
  SPDry01Upper = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.D1S_ACT_SPEED',
  SPMG = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.YA_ACT_SPEED',
  SPDry02Bottom = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.D2I_ACT_SPEED',
  SPDry02Upper = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.D2S_ACT_SPEED',
  SPCalander02 = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.LI2_ACT_SPEED',
  SPCoating = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.PA_ACT_SPEED',
  SPCalander01 = 'EL_SALAM_OS(1)::S7$Program$Machine/OI.LI_ACT_SPEED',

  ACTopLayerConsistencyActual = 'Applications.Application_PM1MD01.NIC101CN_PV_g',
  SPTopLayerConsistencySetpoint = 'Applications.Application_PM1MD01.NIC101CN_SP_g',
  ACBottomLayerConsistencyActual = 'Applications.Application_PM1MD01.NIC102CN_PV_g',
  SPBottomLayerConsistencySetpoint = 'Applications.Application_PM1MD01.NIC102CN_SP_g',
  ACHomogeneityConsistencyActual = 'Applications.Application_PM1MD01.NIC103CN_PV_g',
  SPHomogeneityConsistencySetpoint = 'Applications.Application_PM1MD01.NIC103CN_SP_g',
  ACSteamActual = 'Applications.Application_PM1MD01.PIC101PR_PV_g',
  SPSteamSetpoint = 'Applications.Application_PM1MD01.PIC101PR_SP_g',
  ACTopLayerStockFlowActual = 'Applications.Application_PM1MD01.FIC101ST_PV_g',
  SPTopLayerStockFlowSetpoint = 'Applications.Application_PM1MD01.FIC101ST_SP_g',
  ACBottomLayerStockFlowActual = 'Applications.Application_PM1MD01.FIC102ST_PV_g',
  SPBottomLayerStockFlowSetpoint = 'Applications.Application_PM1MD01.FIC102ST_SP_g',

  ScannerDirection = 'PM1.CONTROLMEAS.BW11.FrameDynamic.ScanDirection',
  SheetBreak = 'Applications.Application_PM1MD01.SheetBreak_OPC',
  Moisture = 'Applications.Application_PM1MD01.Moisture_OPC',
  BasisWeight = 'Applications.Application_PM1MD01.BasisWeight_OPC'

}
