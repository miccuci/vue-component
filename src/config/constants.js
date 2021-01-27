// 状态类型值映射
export const STATUS_MAP = {
  'default': ['253539', '867701', '867704', '867702'], // 已作废, 已完成, 已执行, 已拒绝
  'primary': ['152648', '867700', '867703'], // 已提交, 受理中, 执行中
  'success': ['152647'], // 已保存
  'warning': ['253538'], // 已复核
  'error': ['867699', '867702'] // 占用中, 已拒绝
}
// 期初库存状态对应操作值映射
export const OPENING_STOCK_OPERATION_MAP = {
  '152647': [{ operation: 'view', name: '查看' }, { operation: 'modify', name: '编辑' }, { operation: 'delete', name: '删除' }], // 已保存
  '152648': [{ operation: 'view', name: '查看' }], // 已提交
  '253538': [{ operation: 'view', name: '查看' }], // 已复核
  '249633': [{ operation: 'view', name: '查看' }] // 已记账
}
// 请调申请状态对应操作值映射
export const STOCK_APPLY_OPERATION_MAP = {
  '152647': [{ operation: 'view', name: '查看' }, { operation: 'modify', name: '编辑' }, { operation: 'delete', name: '删除' }], // 已保存
  '152648': [{ operation: 'view', name: '查看' }], // 已提交
  '867699': [{ operation: 'view', name: '查看' }], // 占用中
  '867702': [{ operation: 'view', name: '查看' }], // 已拒绝
  '867700': [{ operation: 'view', name: '查看' }], // 受理中
  '867701': [{ operation: 'view', name: '查看' }] // 已完成
}
// 请调出入库状态对应操作值映射
export const STOCK_ADJUST_OPERATION_MAP = {
  '152647': [{ operation: 'view', name: '查看' }, { operation: 'modify', name: '编辑' }, { operation: 'delete', name: '删除' }], // 已保存
  '253538': [{ operation: 'view', name: '查看' }], // 已复核867691
  '867692': [{ operation: 'view', name: '查看' }], // 已复核867691
  '867691': [{ operation: 'view', name: '查看' }] // 867692
}

// orgId 可选部门， drugstorageid 当前登录人部门
// 药品调价通知单状态对应操作值映射
export const DRUG_ADJUST_OPERATION_MAP = {
  '152647': [{ operation: 'view', name: '查看' }, { operation: 'modify', name: '编辑' }, { operation: 'delete', name: '删除' }], // 已保存
  '152648': [{ operation: 'view', name: '查看' }], // 已提交
  '253538': [{ operation: 'view', name: '查看' }] // 已复核
}

// 药品盘点状态对应操作值映射
export const DRUG_CHECK_OPERATION_MAP = {
  '152647': [{ operation: 'view', name: '查看' }, { operation: 'modify', name: '编辑' }, { operation: 'delete', name: '删除' }], // 已保存
  '152648': [{ operation: 'view', name: '查看' }], // 已提交
  '867703': [{ operation: 'view', name: '查看' }], // 执行中
  '867701': [{ operation: 'view', name: '查看' }] // 已完成
}

// 药品盘点审核状态对应操作值映射
export const DRUG_CHECK_APPROVE_OPERATION_MAP = {
  '152647': [{ operation: 'view', name: '查看' }, { operation: 'modify', name: '编辑' }, { operation: 'delete', name: '删除' }], // 已保存
  '253538': [{ operation: 'view', name: '查看' }] // 已复核
}
